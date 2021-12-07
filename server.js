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

function connected () {
    console.log('Welcome to the Employee Database')
    promptStart();
};

const promptStart = () => {
    console.log('Please Select from the options below');
    inquirer.prompt ([
        {
            name: 'choices',
            type: 'list',
            Message: 'How can we help you today?',
            choices: ['Add Role', 'Add Employee', 'Add Department', 'View Employee',
        'View Department', 'View Role'
     ]
        }
    ]);
};

