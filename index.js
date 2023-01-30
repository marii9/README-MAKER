// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
    },
    { 
        type:'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contributing instructions:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license of the project:',
        choices: [
            "MIT",
            "GPL v3",
            "APACHE 2.0",
            "BSL 1.0"
        ]
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Convert the data to a string
    const readme =  generateMarkdown(data);
   
    // Write the data to a file
    fs.writeFile(fileName, readme, (err) => {
        if (err) {
            throw err;
        }
        console.log(`Successfully wrote to ${fileName}`);
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("README.md", answers);
    });
}
// Function call to initialize app
init();
