//Loading required Modules
//install npm package inquierer
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "name",
      message: "What is your name?",
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
      name: "linkedin",
      message: "What is your linkedin username?",
    },
    {
      type: "input",
      name: "describe",
      message: "Can you please give a breif description of this project?",
    },

    //rest of the questions here....
  ]);
}

// function to write README file
promptUser().then(function (data) {
  console.log(data);
  writeFileAsync("readme.md", md);
});

// function to initialize program
function init() {}

// function call to initialize program
init();

//.catch catches the errors.
//axios callsback info, like ajax but for back-end
