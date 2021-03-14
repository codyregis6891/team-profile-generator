const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');

managerPrompt();

const managerPrompt = [
    {
        name: 'name',
        type: 'input',
        message: 'Enter your name.',
    },
    {
        name: 'id',
        type: 'input',
        message: 'Enter your employee ID number.',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email.',
    },
    {
        name: 'office',
        type: 'input',
        message: 'Enter your office number',
    }
]

const generateHTML = (answers) => 
``



