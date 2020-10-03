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
            name: "title",
            type: "input"
        },
        {
            message: "How would you describe your project?",
            name: "Description",
            type: "input"
        },
        {
            message: "What kind of license should your project have??",
            name: "License",
            type: "input"
        },
        {
            message: "What command should be run to install the dependencies?",
            name: "Install",
            type: "input"
        },
        {
            // name of person using, licence (MIT Apache GNy ISC) year  is for and what the use of this program 
            message: "What is the full name of the person this license is for?",
            name: "fullname",
            type: "input"
        },
         {
            message: "What license will the user be using?",
            choice: "MIT", "Apache". "GNU", "ISC",
            type: "list"
        },
        {
            message: "What is the year for this license?",
            name: "year",
            type: "input"
        },
        {
            message: "What is the purpose of this license use?",
            name: "p",
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



