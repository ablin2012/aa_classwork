class User < ApplicationRecord
    validates :username, :session_token, presence:true, uniqueness:true
    validates :password_digest, presence:true
    validates :password, length: {minimum: 6, allow_nil:true}

    after_initialize :ensure_session_token

    attr_reader :password

    has_many :subs, dependent: :destroy,
        primary_key: :id,
        foreign_key: :moderator_id,
        class_name: :Sub

    def self.find_by_credentials(username,password)
        user = User.find_by(username: username)
        if user
            if user.is_password?(password)
                return user
            end
        end
        nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        return self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
