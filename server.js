const { rootCertificates } = require("tls");

const mysql = ('mysql2');
const inquirer = ('inquirer');
const cTable = ('console.table');

// creates connection to database

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employeetrack_db'
});
