
const mysql = require('mysql');


const con = mysql.createConnection({
    host: "sql2.freemysqlhosting.net",
    user: "sql2298559",
    password: "vX2!cG9!",
    database: "sql2298559"
});

module.exports = con ;
