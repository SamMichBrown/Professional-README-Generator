// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input

const questions = [
    
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name:  'description',
        message: 'Describe your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would you use this project?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How to contibute to this project.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Here is how to test this application.'
    },
    {
      type: 'list',
      message: 'What is your preferred sofware licence?',
      name:'license',
      choices: ['MIT','Eclipse', 'GNU', 'Apache']

    },
    {
        type:'input',
        name: 'github',
        message: 'Enter your GitHub username.'
    },
    {
        type:'input',
        name: 'email',
        message: 'Enter your email address'
    }
];

inquirer
    .prompt(questions)
    .then(data => {
        writeToFile('README.md', data); 
    })

// Create a function to write README file
function writeToFile(fileName, data) {
    const template = generateMarkdown(data)
        fs.writeFile(fileName, template, err => {
        if (err) throw err;
        console.log('Replaced!');       
  });
} 


