// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'What is the license for your project?',
    'What is the description of your project?',
    'What are the installation instructions for your project?',
    'What is the usage information for your project?',
    'What are the main features of your project?',
    'What are the contribution guidelines for your project?',
    'What are the test instructions for your project?',
    'What is your GitHub username?',
    'What is your email address?'
];
const licenseOptions = [
    'Apache',
    'Boost',
    'BSD',
    'Creative Commons',
    'Eclipse',
    'GNU',
    'IBM',
    'ISC',
    'MIT',
    'Mozilla',
    'Perl',
    'SIL',
    'Unlicense',
    'WTFPL',
    'Zlib'
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!");
        }
    })
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
