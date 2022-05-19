require 'sqlite3'
require 'singleton'
require 'byebug'

class QuestionsDatabase < SQLite3::Database
    include Singleton

    def initialize
        super('questions.db')
        self.type_translation = true
        self.results_as_hash = true
    end
end

class Question
    attr_accessor :id, :title, :body, :author_id
    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @author_id = options['author_id']
    end

    def self.find_by_id(id)
        record = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT
                *
            FROM
                questions
            WHERE
                id = ?;
        SQL
        return nil unless record.length > 0
        return Question.new(record[0])
    end

    def self.find_by_author_id(author_id)
        records = QuestionsDatabase.instance.execute(<<-SQL, author_id)
            SELECT
                *
            FROM
                questions
            WHERE
                author_id = ?;
        SQL
        return nil unless records.length > 0
        records.map do |record|
            Question.new(record)
        end
    end

    def self.most_liked(n=1)
        QuestionLike.most_liked_questions(n)
    end

    def author
        User.find_by_id(self.author_id)
    end

    def replies
        Reply.find_by_question_id(self.id)
    end

    def followers
        QuestionFollow.followers_for_question_id(self.id)
    end

    def likers
        QuestionLike.likers_for_question_id(self.id)
    end

    def num_likes
        QuestionLike.num_likes_for_question_id(self.id)
    end

    def save
        if self.id == nil
            QuestionsDatabase.instance.execute(<<-SQL, self.title, self.body, self.author_id)
                INSERT INTO 
                    questions(title, body, author_id)
                VALUES
                    (?,?,?)
            SQL
        else
            QuestionsDatabase.instance.execute(<<-SQL, self.title, self.body, self.author_id, self.id)
                UPDATE
                    questions
                SET
                    title = ?, body = ?, author_id = ?
                WHERE
                    id = ?
            SQL
        end
    end
end

class User
    attr_accessor :id, :f_name, :l_name
    def initialize(options)
        @id = options['id']
        @f_name = options['f_name']
        @l_name = options['l_name']
    end

    def self.find_by_id(id)
        record = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT
                *
            FROM
                users
            WHERE
                id = ?;
        SQL
        return nil unless record.length > 0
        return User.new(record[0])
    end

    def self.find_by_name(f_name, l_name)
        records = QuestionsDatabase.instance.execute(<<-SQL, f_name, l_name)
            SELECT
                *
            FROM
                users
            WHERE
                f_name = ?
            AND
                l_name = ?;
        SQL
        return nil unless records.length > 0
        records.map {|record| User.new(record)}
    end

    def authored_questions
        Question.find_by_author_id(self.id)
    end

    def authored_replies
        Reply.find_by_user_id(self.id)
    end

    def followed_questions
        QuestionFollow.followed_questions_for_user_id(self.id)    
    end

    def liked_questions
        QuestionLike.liked_questions_for_user_id(self.id)
    end

    def average_karma
        records = QuestionsDatabase.instance.execute(<<-SQL, self.id)
            SELECT
                (CAST(COUNT(user_id) AS FLOAT) / COUNT(DISTINCT(title))) AS avg_karma
            FROM
                questions
            LEFT OUTER JOIN
                question_likes ON questions.id = question_id
            WHERE
                author_id = ?;
        SQL
        records[0]['avg_karma']
    end

    def save
        if self.id == nil
            QuestionsDatabase.instance.execute(<<-SQL, self.f_name, self.l_name)
                INSERT INTO 
                    users(f_name, l_name)
                VALUES
                    (?,?);
            SQL
        else
            QuestionsDatabase.instance.execute(<<-SQL, self.f_name, self.l_name, self.id)
                UPDATE
                    users
                SET
                    f_name = ?, l_name = ?
                WHERE
                    id = ?;
            SQL
        end
    end
end

class QuestionFollow
    attr_accessor :id, :user_id, :question_id
    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end

    def self.find_by_id(id)
        record = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT
                *
            FROM
                question_follows
            WHERE
                id = ?;
        SQL
        return nil unless record.length > 0
        return QuestionFollow.new(record[0])
    end

    def self.followers_for_question_id(question_id)
        records = QuestionsDatabase.instance.execute(<<-SQL, question_id)
            SELECT
                users.id, f_name, l_name
            FROM
                question_follows
            JOIN
                users ON user_id = users.id
            WHERE
                question_id = ?;
        SQL
        return nil unless records.length > 0
        records.map { |record| User.new(record) }
    end

    def self.followed_questions_for_user_id(user_id)
        records = QuestionsDatabase.instance.execute(<<-SQL, user_id)
            SELECT
                questions.id, title, body, author_id
            FROM
                question_follows
            JOIN
                questions ON question_id = questions.id
            WHERE
                user_id = ?;
        SQL
        return nil unless records.length > 0
        records.map { |record| Question.new(record) }
    end

    def self.most_followed_questions(n=1)
        records = QuestionsDatabase.instance.execute(<<-SQL, n)
            SELECT
                *
            FROM
                questions
            WHERE id IN(
                        SELECT
                            question_id
                        FROM
                            question_follows
                        JOIN
                            questions ON question_id = questions.id
                        GROUP BY
                            question_id
                        ORDER BY
                            COUNT(user_id) DESC
                        LIMIT ?
                        );
        SQL
        return nil unless records.length > 0
        records.map {|record| Question.new(record)}
    end
end

class Reply
    attr_accessor :id, :question_id, :user_id, :reply_id, :body
    def initialize(options)
        @id = options['id']
        @question_id = options['question_id']
        @user_id = options['user_id']
        @reply_id = options['reply_id']
        @body = options['body']
    end

    def self.find_by_id(id)
        record = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT
                *
            FROM
                replies
            WHERE
                id = ?;
        SQL
        return nil unless record.length > 0
        return Reply.new(record[0])
    end

    def self.find_by_user_id(user_id)
        records = QuestionsDatabase.instance.execute(<<-SQL, user_id)
            SELECT
                *
            FROM
                replies
            WHERE
                user_id = ?;
        SQL
        return nil unless records.length > 0
        records.map {|record| Reply.new(record)}
    end

    def self.find_by_reply_id(reply_id)
        records = QuestionsDatabase.instance.execute(<<-SQL, reply_id)
            SELECT
                *
            FROM
                replies
            WHERE
                reply_id = ?;
        SQL
        return nil unless records.length > 0
        records.map {|record| Reply.new(record)}
    end

    def self.find_by_question_id(question_id)
        records = QuestionsDatabase.instance.execute(<<-SQL, question_id)
            SELECT
                *
            FROM
                replies
            WHERE
                question_id = ?;
        SQL
        return nil unless records.length > 0
        new_arr = []
        records.each do |record|
            new_arr << Reply.new(record)
        end
        return new_arr
    end

    def author
        User.find_by_id(self.user_id)
    end

    def question
        Question.find_by_id(self.question_id)
    end

    def parent_reply
        Reply.find_by_id(self.reply_id)
    end

    def child_replies
        Reply.find_by_reply_id(self.id)
    end

    def save
        if self.id == nil
            QuestionsDatabase.instance.execute(<<-SQL, self.question_id, self.user_id, self.reply_id, self.body)
                INSERT INTO 
                    replies(question_id, user_id, reply_id, body)
                VALUES
                    (?,?,?,?);
            SQL
        else
            QuestionsDatabase.instance.execute(<<-SQL, self.question_id, self.user_id, self.reply_id, self.body, self.id)
                UPDATE
                    replies
                SET
                    question_id = ?, user_id = ?, reply_id = ?, body = ?
                WHERE
                    id = ?;
            SQL
        end
    end
end

class QuestionLike
    attr_accessor :id, :user_id, :question_id
    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end

    def self.find_by_id(id)
        record = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT
                *
            FROM
                question_likes
            WHERE
                id = ?;
        SQL
        return nil unless record.length > 0
        return QuestionLike.new(record[0])
    end

    def self.likers_for_question_id(question_id)
        records = QuestionsDatabase.instance.execute(<<-SQL, question_id)
            SELECT
                users.id, f_name, l_name
            FROM
                users
            JOIN
                question_likes ON users.id = user_id
            WHERE
                question_id = ?;
        SQL
        return nil unless records.length > 0
        records.map {|record| User.new(record)}
    end

    def self.num_likes_for_question_id(question_id)
        records = QuestionsDatabase.instance.execute(<<-SQL, question_id)
            SELECT
                COUNT(*) AS num_likes
            FROM
                question_likes
            WHERE
                question_id = ?;
        SQL
        return nil unless records.length > 0
        records[0]['num_likes']
    end

    def self.liked_questions_for_user_id(user_id)
        records = QuestionsDatabase.instance.execute(<<-SQL, user_id)
            SELECT
                questions.id, title, body, author_id
            FROM
                questions
            JOIN
                question_likes ON questions.id = question_id
            WHERE
                user_id = ?;
        SQL
        return nil unless records.length > 0
        records.map {|record| Question.new(record)}
    end

    def self.most_liked_questions(n = 1)
        records = QuestionsDatabase.instance.execute(<<-SQL, n)
            SELECT
                *
            FROM
                questions
            WHERE id IN(
                        SELECT
                            question_id
                        FROM
                            question_likes
                        JOIN
                            questions ON question_id = questions.id
                        GROUP BY
                            question_id
                        ORDER BY
                            COUNT(user_id) DESC
                        LIMIT ?
                        );
        SQL
        return nil unless records.length > 0
        records.map {|record| Question.new(record)}
    end
end
