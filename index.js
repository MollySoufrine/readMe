//Loading required Modules
//install npm package inquierer
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "project",
    message: "Which project is this?",
  },
  {
    type: "input",
    name: "description",
    message: "Can you please give a breif description of this project?",
  },
  {
    type: "input",
    name: "license",
    message: "What is your current license?",
  },
  {
    type: "input",
    name: "information",
    message: "What is the use of this project?",
  },
  {
    type: "input",
    name: "installation",
    message: "How would a user install this?",
  },
  {
    type: "input",
    name: "test",
    message: "What test instructions should be followed?",
  },

  //rest of the questions here....
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (data) {
    console.log(data);
    writeToFile("README.md", generateMarkdown(data));
  });
}

// function call to initialize program
init();

//.catch catches the errors.
//axios callsback info, like ajax but for back-end
