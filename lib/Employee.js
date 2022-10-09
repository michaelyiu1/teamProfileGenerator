const inquirer = require('inquirer');

class Employee {

    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the Employee's name?"
                }
            ])

        return this.name
    };

    getId(){
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: "What is the Employee's id?"
            }
        ])
        return this.id
    };

    getEmail(){
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'email',
                message: "What is the Employee's email?"
            }
        ])
        return this.email
    };

    getRole(){
        const role = 'Employee';
        return role
    };


}

module.exports = Employee;