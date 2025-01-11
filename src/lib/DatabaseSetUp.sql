CREATE TABLE users (
    email TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL UNIQUE,
    name TEXT NOT NULL,
    username TEXT UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE pages (
    pages_id INTEGER PRIMARY KEY,
    usertoken TEXT REFERENCES users(user_id),
    title TEXT NOT NULL,
    body TEXT NOT NULL
);

CREATE TABLE bookmark (
    bm_id INTEGER PRIMARY KEY,
    heading TEXT NOT NULL,
    ref_id INTEGER REFERENCES pages(pages_id)
);

CREATE TABLE authToken(
    userid TEXT REFERENCES users(user_id),
    authToken TEXT NOT NULL UNIQUE
);