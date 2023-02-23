const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        // The title of my project
        type: "input",
        name: "title",
        message: "What is your project title?",
      },
      {
        // Description
        type: "input",
        name: "description",
        message: "Please add a decription for your project:",
      },
      {
        // License
        type: "checkbox",
        name: "license",
        message: [],
      },
      {
        type: "input",
        name: "",
        message: "",
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub URL?",
      },
    ];

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();




// Table of Contents
// Installation
// Usage

// Contributing
// Tests
// Questions

// When a user enters the project title then it is displayed as the title of the README
// When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
// When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
// When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README
