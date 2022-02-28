// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require("fs");
const inquirer = require("inquirer");
const index = require("../index.js")

function renderLicenseBadge(license) {
  let badge = "";
  if(license === "MIT") {
    badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  } else if (license === "Apache 2.0") {
    badge = "![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  } else if (license === "GPL v3.0") {
    badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === "BSD 3") {
    badge = "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
  } else {
    badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = "https://opensource.org/licenses/MIT";
  } else if (license === "Apache 2.0") {
    licenseLink = "https://opensource.org/licenses/Apache-2.0"
  } else if (license === "GPL v3.0") {
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0" 
  } else  if (license === "BSD 3") {
    licenseLink = "https://opensource.org/licenses/BSD-3-Clause"
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === "None") {
    licenseSection = "";
  } else {
    licenseSection = 
    `license: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `
  # ${answer.title}
  ## ${answer.description}

  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}

  ## TABLE OF CONTENTS
  ### * [License](#license)
  ### * [Installation](#intallation)
  ### * [Usage](#usage)
  ### * [Contributing](#contributing)
  ### * [Test](#test)
  ### * [Questions](#questions)

  ## INSTALLATION
  ### You must install the following for this app to function:
  ### ${answer.installation}

  ## USAGE  
  ### ${answer.usage}

  ## CONTRIBUTIONS  
  ### ${answer.contributing}


  ## TEST  
  ### ${answer.tests}

  ## QUESTIONS  
  ### If you have any questions, you may contact me at:
  ### Github: https://github.com/${answer.github} or,
  ### ${answer.email}
  `;
}

module.exports = generateMarkdown;