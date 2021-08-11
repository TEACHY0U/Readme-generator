// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./generateMarkdown');



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
        name: 'Table of Contents',
        message: 'Table of Contents',
        },
        {
        type: 'input',
        name: 'installation',
        message: 'What does the user need to install to run this app?',
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
            "MIT",
            "GNU General Public License 3.0"],
        name: "license",
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




function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}


init();
