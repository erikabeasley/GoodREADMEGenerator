const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your Project Title?",
            name: "title"
        },
        {
            type: "input",
            message: "Provide a detailed description of you project.",
            name: "description"
        },
        {
            type: "input",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
            name: "installation"
        },
        {
            type: "input",
            message: "Provide instructions for use.",
            name: "usage"
        },
        {
            type: "list",
            message: "Choose a license",
            name: "license",
            choices: ["MIT", "APACHE", "GPL", "None"]
        },
        {
            type: "input",
            message: "Enter contributers:",
            name: "contributing"
        },
        {
            type: "input",
            message: "Provide test instructions.",
            name: "tests"
        },
        {
            type: "input",
            message: "Enter git hub user name.",
            name: "github"
        },
        {
            type: "input",
            message: "Enter email address:",
            name: "email"
        }
    ])
    .then((data) => {
        const fileTitle = data.title.toLowerCase().split('').join('') + "_README.md";

        //Function to generate markdown
const fileInfo = `# ${data.title}

## Description
- ${data.description}

## Table of Contents
- [Installation](#installation) 
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
- ${data.installation}

## Usage
- ${data.usage}

## License
- ${data.license}      

## Contributing
- ${data.contributing}

## Test Instructions
- ${data.tests}

### Questions
If you have any questions or concerns you can reach out to me here:
- GitHub: https://github.com/${data.github}
- Email: ${data.email}
`;

fs.writeFile(fileTitle, fileInfo, function (err) {
    if (err) {
        console.log(err);
    }
    console.log("success")
});

});


        





