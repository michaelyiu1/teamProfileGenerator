const inquirer = require('inquirer');
const employee = require('./Employee');

class Intern extends employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school does this intern attend?'
                }
            ])
        return this.school
    }

    getRole(){
        const role = 'Intern';
        return role
    }
}

module.exports = Intern;