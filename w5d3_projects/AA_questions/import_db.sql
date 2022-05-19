PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id INTEGER PRIMARY KEY,
    f_name TEXT NOT NULL,
    l_name TEXT NOT NULL
);

CREATE TABLE questions(
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    author_id INTEGER NOT NULL,
    
    FOREIGN KEY (author_id) REFERENCES users(id)
);


CREATE TABLE question_follows(
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);


CREATE TABLE replies(
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    reply_id INTEGER,
    user_id INTEGER NOT NULL,
    body TEXT NOT NULL,
    
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (reply_id) REFERENCES replies(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
    
);


CREATE TABLE question_likes(
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO
    users(f_name, l_name)
VALUES
    ('Adam', 'Lin'),
    ('Danny', 'Wallace'),
    ('Joe', 'Schmo');

INSERT INTO
    questions(title, body, author_id)
VALUES
    ("How do you code?", "Please help I don't know", (SELECT id FROM users WHERE f_name = "Adam")),
    ("How do you cook good soup?", "Making it for my grandma", (SELECT id FROM users WHERE f_name = "Danny")),
    ("How do you stop headaches?", "Please I'm dying", 3),
    ("Please give me likes", "Pls I need them", 1);

INSERT INTO
    question_follows(user_id, question_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 1),
    (2, 2);

INSERT INTO
    replies(question_id, reply_id, user_id, body)
VALUES
    (1, NULL, 2, "Git gud kid"),
    (1, NULL, 2, "LOL"),
    (1, 1, 2, "I'm sorry that was mean"),
    (1, 3, 1, "lmao");

INSERT INTO
    question_likes(user_id, question_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 1),
    (2, 2),
    (3, 1);