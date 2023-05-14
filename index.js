const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},
{
    type: 'list',
    name: 'license',
    message: 'What is the license for your project?',
    choices: [
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
        'Zlib',
        'None'
    ]
},
{
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?'
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your project?'
},
{
    type: 'input',
    name: 'usage',
    message: 'What is the usage information for your project?'
},
{
    type: 'input',
    name: 'features',
    message: 'What are the main features of your project?'
},
{
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines for your project?'
},
{
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions for your project?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
},
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
},
];

function writeToFile(data) {

    const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
    const folderPath = 'markdown-files';
    const fileName = `README_${timestamp}.md`;
    const filePath = path.join(folderPath, fileName);

    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`README file written to: ${filePath}`);
        }
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const markdown = generateMarkdown(data);
            writeToFile(markdown);
        })
        .catch((error) => {
            console.log(error);
        });
}

init();
