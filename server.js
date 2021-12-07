

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

            case "View Employees by Role":
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
    let query = "SELECT * FROM role"
    connection.query(query, function (res, err) {
        console.log(res);
        promptStart();
    });
}


// view department function

function viewEmployeeDept () {

}