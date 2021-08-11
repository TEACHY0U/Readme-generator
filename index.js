// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generatorMarkdown = require('util/generateMarkdown');



// // TODO: Create an array of questions for user input
const questions = ([
        {
        type: 'input',
        name: 'title',
        message: 'What is the name of your Project?',
        },
        {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your Project.',
        },
        {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your Project.',
        },
        {
        type: 'input',
        name: 'Table of Contents',
        message: 'Table of Contents',
        },
        {
        type: 'input',
        name: 'usage',
        message: 'How would you like your application to be used?',
        },
        {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed on this project?',
        },
        {
        type: 'input',
        name: 'test',
        message: 'what are the Test Instructions?',
        },
        {
        type: 'checkbox',
        message: 'what are the Test Instructions?',
        choices: [
            "Apache",
            "MIT",
            "ISC",
            "GNU GPLv3"
        ],
        name: "license"
        },
        {
        type: 'input',
        name: 'credit',
        message: 'Whose Credit is this work?',
        },
        {
        type: 'input',
        name: 'questions',
        message: 'Contact info for inquiries.',
        },
        {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        },

    ]);
    


// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err) }
            else {
                console.log("success")
            }
        })
    }



// // TODO: Create a function to initialize app
function init() {}

// // Function call to initialize app
init();
