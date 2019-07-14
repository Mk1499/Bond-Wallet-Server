const express = require('express');
const app = express();
const server = require("http").Server(app);
const mysql = require('mysql');
const bodyParser = require('body-parser');
const LoginRouter = express.Router();
const con = require('./dbConnection');

LoginRouter.use(bodyParser.json()); // to support JSON-encoded bodies
LoginRouter.use(
    bodyParser.urlencoded({
        extended: true
    })
);
LoginRouter.use(express.json()); // to support JSON-encoded bodies
LoginRouter.use(express.urlencoded());

LoginRouter.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});





// const ExRouter = require("./routes/exchangePoints");
LoginRouter.post("/login", function(req, res) {

    console.log("Affected Here !!!!", req.body);
    con.connect(function(err) {
        let checkValidUser = `select * from users where email = '${req.body.email}' and password = '${req.body.password}'`;

        con.query(checkValidUser, function(error, result) {
            if (error || result.length === 0) {
                console.log(checkValidUser);
                res.send(404, { message: error });
            } else {
                console.log(checkValidUser);
                res.send(200, { userData: result[0] })
            }
        });

    });

});

module.exports = LoginRouter ;
