function generateMarkdown(answers) {
    return `# ${answers.title}

## Description
${answers.description}

## Github
# ${answers.github}

## Year Created
# ${answers.yearcreated}

# Full Name
${answers.fullname}


## Installation
# ${answers.install}

## Usage
# ${answers.usage}


## Sources/links
# Provide instructions and examples for use. Include screenshots as needed. 
# ![](utils/README_Generator.mov)

## Credits
# ${answers.credits}


## Email
# ${answers.email}

## License 
# ${answers.license}


## Badges

![Badmath](img.shields.io/github/license/JDBgit9/README.md)


---
© 2020 James D Beeks developer readme, a Delisco, Inc. brand. All Rights Reserved.





    `;
}

module.exports = generateMarkdown;