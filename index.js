// require all node packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateMArkdown = require("./utils/generateMarkdown");



// set up inqurirer with all necessary questions
inquirer.prompt([
    {
        message: "What is your project name?",
        name: "title",
        type: "input"
    },
    {
        message: "How would you describe your project?",
        name: "description",
        type: "input"
    },
    {
        message: "What is your Github username?",
        name: "github",
        type: "input"
    },
    {
        message: "What year was this project created?",
        name: "yearcreated",
        type: "input"
    },
    {
        message: "What is the full name of the user attaining the license",
        name: "fullname",
        type: "input"
    },
    {
        message: "What command should be run to install dependencies",
        name: "install",
        type: "input"
    },

    {
        message: "What is the purpose of this project?",
        name: "usage",
        type: "input"
    },
    {
        message: "Is there anyone else to credit for this project?",
        name: "credits",
        type: "input"
    },
    {
        message: "What is your email address?",
        name: "email",
        type: "input"
    },
    {
        message: "What kind of license should your project have?",
        name: "license",
        type: "input"
    },
])
    .then(function (answers) {
        console.log(answers);
    
        const generatedFile = generateMArkdown(answers)
    
        console.log(generatedFile);
    } )
