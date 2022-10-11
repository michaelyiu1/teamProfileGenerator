const inquirer = require('inquirer');
const employee = require('./Employee');

class Intern extends employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(school){
        this.school = school;
    }

    getRole(){
        this.role = 'Intern';
    }
}

module.exports = Intern;