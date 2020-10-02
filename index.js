// require all node packages
var inquirer = require('inquirer');

// set up inqurirer with all necessary questions
inquirer
    .prompt([
        { 
            message: "What is your Github username?",
            name: "github",
            type: "input" 
        },
        {
            message: "What is your email address?",
            name: "email",
            type: "input"
        },
        {
            message: "What is your project name?",
            name: "projectname",
            type: "input"
        },

    ])
    .then(answers => {
        // Use user feedback for... whatever!!
        console.log(answers.email)
        console.log(answers.projectname)
        console.log(answers.github)
       // set up functinality to write the markdown file
       //    make a general markdown template
    //    Pass the answers in  as temperate literals
    
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });



