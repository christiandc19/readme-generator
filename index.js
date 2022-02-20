// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = ([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project? (Required)",
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Enter the title of your project');
                  return false;
                }
              }
        },

        {
            type: "list",
            name: "license",
            message: "What license does your project use?",
            choices: ["MIT", "Apache 2.0", "GPL v3.0", "None"],
            validate: licenseInput => {
                if (licenseInput) {
                  return true;
                } else {
                  console.log('You need to choose from the list of licenses!');
                  return false;
                }
              }
        },  

        {
            type: "input",
            name: "installation",
            message: "What steps are needed to install your project? (Required)",
            validate: installationInput => {
                if (installationInput) {
                  return true;
                } else {
                  console.log('Please provide installation steps');
                  return false;
                }
              }
        },

        {
            type: "input",
            name: "usage",
            message: "What is the use of your project?",
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('Please provide usage of your project!');
                  return false;
                }
              }
        },

        {
            type: "input",
            name: "contribution",
            message: "What guidelines must others follow in order to contribute",
            validate: contributionInput => {
                if (contributionInput) {
                  return true;
                } else {
                  console.log('You need to choose from the list of licenses!');
                  return false;
                }
              }
        },

        {
            type: "input",
            name: "test",
            message: "How do you test this project?",
            validate: testInput => {
                if (testInput) {
                  return true;
                } else {
                  console.log('Please explain how to test this project');
                  return false;
                }
              }
        },

        {
            type: "input",
            name: "github",
            message: "What is your Github username?",
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('Please provide your Github username.');
                  return false;
                }
              }
        },

        {
            type: "input",
            name: "email",
            message: "What is your email address?",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Pleae enter your email address.');
                  return false;
                }
              }
        },
    ])


// // TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./generateREADME.md", fileContent, err => {
        if (err) {
            reject (err);
            return;
        }
        resolve({
            ok: true
        });
    });
});
}

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {
        console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
    })
}

// // Function call to initialize app
 init();

 module.exports = questions;