const express = require('express');
const app = express();
const server = require("http").Server(app);
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PointRouter = require('./routes/exchangePoints') ;
const LoginRouter = require('./routes/loginRouter') ;
const RegRouter = require('./routes/RegRouter') ;


app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded());

const con = mysql.createConnection({
    host: "localhost",
    user: "mohamed",
    password: "123",
    database: "Bond"
});

app.get("/", function(req, res) {

    console.log("Welcome !!!!");
    res.send("Welcome in MK server");
})


app.use('/',RegRouter);
app.use('/',PointRouter);
app.use('/',LoginRouter);



server.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log("DB Server has started");
});
