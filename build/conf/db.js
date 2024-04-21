"use strict";
//const config = require('./config');
const crecry = require('./CreCry');
const mysql = require('mysql');
const fs = require('fs');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'db',
    // ssl: {
    //     rejectUnauthorized: false,
    //     ca: fs.readFileSync('/etc/letsencrypt/live/www.collaudolive.xyz/cert.pem').toString()  
    // }
});
conn.query("SELECT * FROM rappre_prog_gisfo", (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(result);
});
module.exports = conn;
