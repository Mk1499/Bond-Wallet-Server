const express = require('express');
const app = express();
const server = require("http").Server(app);
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PointRouter = express.Router();
const cors = require('cors') ;
const con = require('./dbConnection');

PointRouter.use(cors())
PointRouter.use(bodyParser.json()); // to support JSON-encoded bodies
PointRouter.use(
    bodyParser.urlencoded({
        extended: true
    })
);
PointRouter.use(express.json()); // to support JSON-encoded bodies
PointRouter.use(express.urlencoded());

PointRouter.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});





// const ExRouter = require("./routes/exchangePoints");
PointRouter.post("/exPoints", function(req, res) {

    console.log("Affected Here !!!!", req.body);
    con.connect(function(err) {
        let increaseSellerPoints = `update users set points= points + ${req.body.points} where id= ${req.body.id}`;
        let decreaseCustomerPoints = `update users set points= points - ${req.body.points} where id= ${req.body.customerId}`;


        con.beginTransaction(function(err) {
            if (err) { throw err; }
            con.query(increaseSellerPoints, function(error) {
                if (error) {
                    return con.rollback(function() {
                        throw error;
                    });
                }

                //   var log = 'Post ' + results.insertId + ' added';

                con.query(decreaseCustomerPoints, function(error) {
                    if (error) {
                        return con.rollback(function() {
                            throw error;
                        });
                    }
                    con.commit(function(err) {
                        if (err) {
                            return con.rollback(function() {
                                throw err;
                            });
                        }
                        console.log('success!');
                    });
                });
            });
        });

    });
});




module.exports = PointRouter ;

// server.listen(process.env.PORT || 3005, process.env.IP, function() {
//     console.log("DB Server has started");
// });
