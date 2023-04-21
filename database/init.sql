CREATE DATABASE IF NOT EXISTS valor_academy;

USE valor_academy;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
username VARCHAR(255) NOT NULL
);

CREATE TABLE courses (
id SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
creator INTEGER NOT NULL,
FOREIGN KEY (creator) REFERENCES users(id)
);

CREATE TABLE lessons (
id SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
content TEXT NOT NULL,
course_id INTEGER NOT NULL,
FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE TABLE quizzes (
id SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
course_id INTEGER NOT NULL,
FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE TABLE quiz_questions (
id SERIAL PRIMARY KEY,
content TEXT NOT NULL,
quiz_id INTEGER NOT NULL,
FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
);

CREATE TABLE quiz_options (
id SERIAL PRIMARY KEY,
content TEXT NOT NULL,
question_id INTEGER NOT NULL,
FOREIGN KEY (question_id) REFERENCES quiz_questions(id)
);

CREATE TABLE quiz_answers (
id SERIAL PRIMARY KEY,
content TEXT NOT NULL,
question_id INTEGER NOT NULL,
FOREIGN KEY (question_id) REFERENCES quiz_questions(id)
);