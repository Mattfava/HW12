use employeedb;
INSERT INTO department (name)
VALUES
("Managment"),
("Executive"),
("Developer");
use employeedb;
INSERT INTO role (title,salary, department)
VALUES
("Sales Manager",90000,"Managment"),
("Front End Developer",80000,"Developer"),
("Senior Developer",120000,"Developer"),
("CEO",450000,"Executive");
use employeedb;
INSERT INTO employee(first_name,last_name,role)
VALUES
("Roofus","Smith","Front End Developer"),
("Lila","Dan","CEO");
