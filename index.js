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
            message: "Provide a detailed description of you project",
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
            message: "Enter contributing guidelines",
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
            message: "Enter email address and instructions on how to reach you with any additional questions",
            name: "email"
        }
    ])
    .then((data) => {
        const fileTitle = data.title.toLowerCase().split('').join('') + "_README.md";

        //Function to generate markdown
        generateMarkdown(data);

        fs.writeFile(fileTitle, generateMarkdown, function (err) {
            if (err) {
                console.log(err);
            }
            console.log("success")
        })

    });




