const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generateCard = require('../src/generateCard');
const generateHTML = require()
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
            managerCard = generateCard(this);
            cardArray.push(managerCard);
            console.log(answers);
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
        const engineer = new Engineer
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
                engineer.name = answers.name;
                engineer.id = answers.id;
                engineer.email = answers.email;
                engineer.github = answers.github;
                engineer.getRole();
                engineerCard = generateCard(engineer);
                cardArray.push(engineerCard);
                console.log(engineer);
                console.log(this);
                this.askAddMember();
            })
    }

    getInternInfo(){
        const intern = new Intern
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
                intern.name = answers.name;
                intern.id = answers.id;
                intern.email = answers.email;
                intern.school = answers.school;
                intern.getRole();
                internCard = generateCard(intern);
                console.log(internCard);
                cardArray.push(internCard);
                console.log(intern);
                console.log(this);
                this.askAddMember();
            })
    }

    getRole(){
        this.role = 'Manager';
    };

    writeFile(){
        cardArray.join('\n');
        const htmlContent = generateHTML(cardArray[0]);
        fs.writeFile('index.html', htmlContent, (err) =>
        err ? console.log(err) : console.log('Success!')
        );

        process.exit(0);
    };

}

module.exports = Manager;