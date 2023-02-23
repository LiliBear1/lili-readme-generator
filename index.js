const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

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
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const markdown = generateMarkdown(answers);
    const filename = "README.md";
    const filepath = path.join(process.cwd(), filename);
    await writeToFile(filepath, markdown);
    console.log(`Successfully wrote ${filename} to ${filepath}`);
  } catch (err) {
    console.error(err);
  }
}

// function call to initialize program
init();
