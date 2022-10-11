const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generateCard = require('../src/generateCard');
const generateHTML = require('../src/generateHTML');
const fs = require('fs');
let cardArray = [];
let engineerCard;
let internCard;
let managerCard;

class Manager extends Employee {
    
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
            this.name = answers.name;
            this.id = answers.id;
            this.email = answers.email;
            this.officeNumber = answers.officeNumber;
            this.getRole();
            managerCard = generateCard(this);
            cardArray.push(managerCard);
            this.askAddMember();
        })
    
    }

    askAddMember(){
        inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'choice',
                    message: "Would you like to add a new team member?",
                }
            ])
            .then((val) => {
                if(val.choice){
                    this.addTeamMember();
                } else {
                    this.writeFile();
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
                if(answers.addTeamMember[0] === 'Engineer'){
                    this.getEngineerInfo();
                }
                else {
                    this.getInternInfo();
                }})
    }

    getEngineerInfo(){
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the Employee's name?"
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is the Employee's id?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the Employee's email?"
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "Please paste the employee's github link"
                }
            ])
            .then((answers) => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                engineer.getRole();
                engineerCard = generateCard(engineer);
                cardArray.push(engineerCard);
                this.askAddMember();
            })
    }

    getInternInfo(){
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the Employee's name?"
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is the Employee's id?"
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the Employee's email?"
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "What school does this intern attend?"
                }
            ])
            .then((answers) => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                intern.getRole();
                internCard = generateCard(intern);
                console.log(internCard);
                cardArray.push(internCard);
                this.askAddMember();
            })
    }


    getRole(){
        this.role = 'Manager';
    };

    writeFile(){
        cardArray.join('\n');
        const htmlContent = generateHTML(cardArray);
        console.log(cardArray);
        console.log(htmlContent);

        fs.writeFile('index.html', htmlContent, (err) => {
            err ? console.log(err) : console.log('Success')
        });
    };

}

module.exports = Manager;