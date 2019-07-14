const express = require('express');
const app = express();
const server = require("http").Server(app);
const bodyParser = require('body-parser');
const RegRouter = express.Router();
const con = require('./dbConnection');

RegRouter.use(bodyParser.json()); // to support JSON-encoded bodies
RegRouter.use(
    bodyParser.urlencoded({
        extended: true
    })
);
RegRouter.use(express.json()); // to support JSON-encoded bodies
RegRouter.use(express.urlencoded());

RegRouter.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});





// const ExRouter = require("./routes/exchangePoints");
RegRouter.post("/reg", function(req, res) {

    console.log("Affected Here !!!!", req.body);
    con.connect(function(err) {
        let insertUser = `insert into users (username,email,password) values ('${req.body.username}' , '${req.body.email}' , '${req.body.password}')`;

        con.query(insertUser, function(error, result) {
            if (error) {
                console.log(error);
            }
        });

    });

});

module.exports = RegRouter ;
