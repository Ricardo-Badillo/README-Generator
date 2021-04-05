const inquirer = require('inquirer');

let readMeGen = async () => {
    const inputs = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'newProject'
        },
        {
            type: 'input',
            message: 'What is the desctription of your new project?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What are the instructions to install your application?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'How will you use this application?',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'What license will your project be using?',
            name: 'license',
            choices: ['Apache', 'Microsoft', 'MIT', 'Mozilla']
        },
        {
            type: 'input',
            message: 'Who made this project?',
            name: 'contributing'
        },
        {
            type: 'confirm',
            message: 'Is there a test in this project?',
            name: 'test'
        },
        {
            type: 'input',
            message: 'Are there any questions to make this project?',
            name: 'questions'
        }, 
        {
            type: 'input',
            message: 'Enter your GitHub',
            name: 'github'
        },
        {
            type: 'input',
            message: 'Enter your email address',
            name: 'email'
        }
    ])
const { newProject, description, installation, usage, license, contributing, test, questions, github, email } = inputs;

const readMe = `

## Description

${description}

## Table of Contents
- [Descritption] 
- [Installation] 
- [Usage]
- [Contribution] 
- [Test]
- [Questions] 
- [GitHub] 
- [Email] 

## Installation

${installation}

## Usage

${usage}

## Contribution

${contributing}

## Test

${test}

## Questions

${questions}

## GitHub

${github}

## Email

${email}`;

    const fs = require('fs');
        fs.writeFile('new-README.md', readMe, (error) => {
            if (error){
                console.log(error);
            } else {
                console.log('New ReadMe has been created!');
            }
    })

}

readMeGen();












// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
