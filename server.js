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
// Prompt Function
const promptStart = () => 
    inquirer.prompt ({
            name: 'choices',
            type: 'list',
            Message: 'How can we help you today?',
            choices: ['View All Employees', 'View Employees by Role', 'View Employees by department','View Employees by Manager',
            'Add a Employee','Add a Role','Add Department','Update Role','Update Manager','Delete Employee',
            'Delete Role', 'Delete Department', 'view department budget', 'exit'
     ]
        
    }).then((choices) => {

        switch(choices.action) {
            case "View all Employees":
                viewEmployees();
                break;

            case "View Employees by Role":
                viewEmployeeRole();
                break;
                
            case "View Employees"    
        }
    })