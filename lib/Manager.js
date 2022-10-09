const inquirer = require('inquirer');
const employee = require('./Employee');
const engineer = require('./Engineer');
const intern = require('./Intern');

class Manager extends employee {
    
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getManagerInfo(){
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Hello team Manager. What is your name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your employee id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is your office number?'
            },
        ])
        .then((answers) => {
            console.log(answers);
            this.askAddMember();
        })
    
    }

    askAddMember(){
        inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'askAddMember',
                    message: "Would you like to add a new team member?",
                }
            ])
            .then((val) => {
                if(val.choice){
                    this.addTeamMember();
                } else {
                    this.quit();
                }
            })

    }

    addTeamMember(){
        inquirer
            .prompt([
                {
                    type: 'checkbox',
                    name: 'addTeamMember',
                    message: 'Would you like to add an Engineer or Intern?',
                    choices: ['Engineer', 'Intern']
                }
            ])
            .then((answers) => {
                if(answers.addTeamMember === 'Engineer'){
                    console.log('add engineer');
                }
                else {
                    console.log('add intern');
                }
            })
    }



    quit(){

    }


    getRole(){
        const role = 'Manager';
        return role
    };

}

module.exports = Manager;