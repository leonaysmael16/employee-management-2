DROP DATABASE IF EXSITS employeetrack_db;

CREATE DATABASE employeetrack_db;

USE employeetrack_db;

CREATE TABLE department (
    title VARCHAR (30)
);

CREATE TABLE role (
    title VARCHAR (30), id INT NOT NULL auto_increment PRIMARY KEY
)