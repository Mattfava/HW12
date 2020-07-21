var mysql = require("mysql");
var inquirer = require("inquirer")
var connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"rootpass",
    database:"employeedb"
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("Welcome to the Employee Tracker");
});

module.exports = connection;