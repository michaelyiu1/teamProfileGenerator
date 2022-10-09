const inquirer = require('inquirer');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');
const employee = require('./lib/Employee');
const Manager = require('./lib/Manager');

const newManager = new Manager();

newManager.getManagerInfo();


