const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// Creating writeFileAsync function using promisify method 

// fs.writeFile method asynchronously writes data to a file. However, callback function is called once the write operation is complete

// promisify method converts callback-based APIs to promise-based APIs

// So, util.promisify(fs.writeFile) converts fs.writeFile to promise-based API. Allows use of writeFileAsync function with async/await syntax instead of callbacks

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide installation instructions for your project:",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide usage information for your project:",
    name: "usage",
  },
  {
    type: "input",
    message: "Please provide contribution guidelines for your project:",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please provide test instructions for your project:",
    name: "tests",
  },
  {
    type: "list",
    message: "Please choose a license for your project:",
    name: "license",
    // found at https://choosealicense.com/community/
    choices: ["MIT", "Apache", "GNU GPLv2", "GNU GPLv3", "ISC", "None"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return writeFileAsync(fileName, data);
}

// function to initialize program
// async function named init defined 
async function init() {
  try {
    // inquirer.prompt() method to ask questionsand wait for responses. 
    // Answers stored in object
    const answers = await inquirer.prompt(questions);
    // Then calls generateMarkdown(), passing answers object as argument, to generate Markdown string based on responses.
    const markdown = generateMarkdown(answers);
    // Defines filename and filepath to save generated markdown to README
    const filename = "README.md";
    const filepath = path.join(process.cwd(), filename);
    // Use writeToFile() to write markdown to file
    await writeToFile(filepath, markdown);
    // function logs success message to console indicating file has been successfully written. If error occurs, function catches error and logs it to console
    console.log(`Successfully wrote ${filename} to ${filepath}`);
  } catch (err) {
    console.error(err);
  }
}

// function call to initialize program
init();
