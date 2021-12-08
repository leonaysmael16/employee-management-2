

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
const promptStart = () => {
    inquirer.prompt ({
            name: 'choices',
            type: 'list',
            Message: 'How can we help you today?',
            choices: ['View All Employees', 'View Employees by Role', 'View Employees by department','View Employees by Manager',
            'Add a Employee','Add a Role','Add Department','Update Role','Update Manager','Delete Employee',
            'Delete Role', 'Delete Department', 'view department budget', 
     ]
        
    }).then((choices) => {

        switch(choices.action) {
            case "View all Employees":
                viewEmployees();
                break;

            case "ViewRole":
                viewEmployeeRole();
                break;
                
            case "View Department":
                viewDept();

            case "Add a Employee":
                addEmployee();
                break;
                
            case "Add a Role":
                addRole();
                break;
                
            case "Add a Employee":
                addEmployee();
                break;
            
            case "Add Department":
                addDept();
                break;
                
            case "Update Role":
                updateRole();
                break;
                
            case "view department budget":
                deptBudget();
                
                



        }
    });
}

// view all employees functions

function viewEmployees () {
    let query = "SELECT employee.id, employee.first_name, employee.last_name, title.role, department.dept_name AS department, salary.role FROM employee LEFT JOIN role ON employee.id_role = JOIN department on role.dept_id = dept.id"
    connection.query(query, function (res, err) {
        console.log(res);
        promptStart();
    });
}

// View all roles function 

function viewEmployeeRole () {
    let query = "SELECT * FROM role";
    connection.query(query, function (res, err) {
        console.log(res);
        promptStart();
    });
}


// view department function

function viewEmployeeDept () {
    let query = "SELECT * FROM department";
    connection.query(query, function(res, err) {
        console.log(res);
        promptStart();
         
         });
}

// add role function

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "What's the title of the role?",
            name: "titleRole"
        },
        {
            type: "input",
            message: "What is the total salary for the role?",
            name: "roleSalary"
        },
        {
            type: "input",
            message: "Insert ID number",
            name: "deptNumber"
        }
    ]).then(function(choice) {
        connection.query("INSERT INTO role (Title, Salary, department_number) VALUES (?,?,?)", [choice.titleRole, choice.roleSalary, choice.deptNumber], function (res, err) {
            console.log(res);
            promptStart();
        });
    });
}

// add department function

function addDept() {
    inquirer
    .prompt({
        type: "input",
        message: "What's the department name?",
        name: "nameDept"
    }).then(function (choice) {
        connection.query("INSERT INTO department (name) VALUES (?)", [choice.nameDept], function(res, err) {
            console.log(res);
            promptStart();
        });
    });
}

// update role function