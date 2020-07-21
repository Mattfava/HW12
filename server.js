const inquirer = require("inquirer");
const connection = require("./config/connection");
//getRoles();
//getDepartment()
begin();
function begin(){
    inquirer.prompt({
        name:"menu",
        type:"list",
        message:"Menu",
        choices:[
            "View all employees",
            "View all Roles",
            "View all Departments",
            "Add Departments",
            "Add Roles",
            "Add Employees",
            "Update Employees",
            "Exit"
        ]
    }).then(function(answer){
        console.log(answer);
        switch(answer.menu){
            case "View all employees":
                viewEmployee();
                break;
            
            case "View all Roles":
                viewRole();
                break;

            case "View all Departments":
                viewDepartment();
                break;

            case "Add Departments":
                addDepartment();
                break;
                    
            case "Add Roles":
                addRole();
                break;
            
            case "Add Employees":
                addEmployee();
                break;
            
            case "Exit":
                connection.end();
                break;
        }
    });
};



function getRoles(roles){
    var add = "SELECT title FROM role";
    
    connection.query(add, function(err,res){
        for(var i = 0; i<res.length;i++){
            var title = res[i].title;
            var stringTitle = title.toString();
            roles.push(stringTitle);
        }
        return(roles)
    })
}

function viewEmployee(){
    var view = "SELECT * FROM employee";

    connection.query(view, function(err,res){
        if(err) throw err;
        console.log(res);
        begin();
    });
};

function viewRole(){
    var view = "SELECT * FROM role";

    connection.query(view, function(err,res){
        if(err) throw err;
        console.log(res);
        begin();
    });
};

function viewDepartment(){
    var viewDep = "SELECT * FROM department";

    connection.query(viewDep, function(err,res){
        if(err) throw err;
        console.log(res);
        begin();
    });
};
function addEmployee(){
    var roles = [];
    getRoles(roles);
    inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "What is the employee's first name"
        },
        {
            name: "lastName",
            type: "input",
            message: "What is the employee's last name"
        },
        {
            name:"role",
            type:"list",
            choices: roles,
            message:"What is the employee's title"
        }
    ]).then(function(answer){
        var addEmpl = "INSERT INTO employee SET ?";
        connection.query(addEmpl, {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role: answer.role
        },
        function(err,answer){
            if(err) throw err;
            console.table(answer);
        }
        );
        begin();
    });
}
function addDepartment(){
    inquirer.prompt([
        {
            name:"addDept",
            type:"input",
            message:"Please add what department you want to add"
        }
    ]).then(function(answer){
        var depAdd = "INSERT INTO department SET ?";

        connection.query(depAdd,{name:answer.addDept});
        begin();
    });
    
}
function addRole(){
    var department = [];

   getDepartment(department)
    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What is the title"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary for this title"
        },
        {
            name:"department",
            type:"list",
            choices:department,
            message:"What is the department"
        }
    ]).then(function(answer){
        var addDep = "INSERT INTO role SET ?";
        connection.query(addDep, {
          title: answer.title,
          salary: answer.salary,
          department: answer.department
        },
        function(err,answer){
            if(err) throw err;
        }
        );
       begin();
    });
}
function getDepartment(department){
    var add = "SELECT name FROM department";
    //console.log(add);
    connection.query(add, function(err,res){
        for(var i = 0; i<res.length;i++){
            var role = res[i].name;
            var stringRole = role.toString();
            department.push(stringRole);
        }
        return(department)
    })
}


