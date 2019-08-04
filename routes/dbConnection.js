
const mysql = require('mysql');


const con = mysql.createConnection({
    host: "sql7.freemysqlhosting.net",
    user: "jMN8bA3G1E",
    password: "XpeT2amIuC",
    database: "remotemysql.com"
});

module.exports = con ;
