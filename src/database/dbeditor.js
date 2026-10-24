// Constants, Do not touch these
const Database = require("better-sqlite3");

const db = new Database("src/database/sql-inj-database.db");


/*
    Everything after "db.exec('" and upto "')" is a SQL statement,
    You can add multiple db.exec statements to run multiple commands
    After your changes are added, run "npm run dbexec" on the CLI
    to execute the changes.

    You can do both commands in the same db.exec command by seperating
    it using the ";" symbol, however it is easier to lose your way.
 */
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

// Console Log for Debugging
console.log("DB Changes Executed Successfully");

// Do not touch this.
module.exports = db;
