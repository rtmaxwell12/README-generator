// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//Create an array of questions for user input
const questions = [
"What would you like to title your README?",
"Please enter a description for your project.",
"Please enter the installation instructions for your project.",
"Please enter instructions for use of your project.",
"Please enter guidelines for future contributors.",
"Please enter instructions for running tests."
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            console.log(err); 
        }
    });
}

// Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contributions'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'testing'
        },
        {
            type: 'input',
            message: 'Select a License:',
            choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
            name: 'license'
        }
    ]
    ).then((response) => {
        let markdown = generateMarkdown(response);
        writeToFile("newREADME.md", markdown, (err) => err? console.log("Error!") : console.log("success!"));
    })
}

// Function call to initialize app
init();

