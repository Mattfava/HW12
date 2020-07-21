DROP DATABASE employeedb;
CREATE DATABASE IF NOT EXISTS employeedb;

use employeedb;
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
)
use employeedb;
CREATE TABLE IF NOT EXISTS role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department VARCHAR(30),
    PRIMARY KEY(id)
)
use employeedb;
CREATE TABLE IF NOT EXISTS employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
)