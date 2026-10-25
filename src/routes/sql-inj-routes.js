// express and router constants to handling API calls.
const express = require('express');
const router = express.Router();

const Database = require("better-sqlite3");
const {response} = require("express");
const db = new Database("src/database/sql-inj-database.db");


// API Routes
router.post('/login', (req, res) => {
   const {username, password} = req.body;

   try{
       query = db.prepare(`
               SELECT *
               FROM users
               WHERE name = '${username}'
                 AND password = '${password}'
           `).get();

       res.json({
           success: !!query,
           username: query.name,
           email: query.email,
       });

   } catch(err){
       console.log()
       console.log(err)
       res.status(500).json({ error: "Internal Database Error" });
   }

});

module.exports = router;


