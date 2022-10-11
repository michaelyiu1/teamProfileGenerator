const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');

class Engineer extends Employee {

    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGithub(github){
        this.github = github;
    }

    getRole(){
        this.role = 'Engineer';
    }

}

module.exports = Engineer;