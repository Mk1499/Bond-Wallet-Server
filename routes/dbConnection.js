
const mysql = require('mysql');


const con = mysql.createConnection({
    host: "remotemysql.com",
    user: "jMN8bA3G1E",
    password: "XpeT2amIuC",
    database: "jMN8bA3G1E"
});

module.exports = con ;
