const Database = require('better-sqlite3')

const db = new Database("./src/database/sql-inj-database.db");

db.exec(`
    DROP TABLE IF EXISTS users;
`)

db.exec(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL)
`);

db.exec(`
INSERT INTO users (name, email, password) 
VALUES 
    ('Bob', 'bob@hotmail.com', 'BOB_PASS_HASH'),
    ('Alice', 'alice@yahoo.com', 'ALICE_PASS_HASH');
`);


console.log("SQL Injection Database Reset.");

module.exports = db;
