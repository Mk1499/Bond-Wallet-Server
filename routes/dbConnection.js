
const mysql = require('mysql');


const con = mysql.createConnection({
    host: "sql7.freemysqlhosting.net",
    user: "sql7300013",
    password: "Wuh838XsT5",
    database: "sql7300013"
});

module.exports = con ;
