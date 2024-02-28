// Here are all the packages requiered for the app to work 
const fs = require("fs");
const inquirer = require("inquirer");
const generateMark = require("./utils/generateMarkdown");
// here are all the questions for the user to answer
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name the project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide short description of the project",
  },
  {
    type: "input",
    name: "install",
    message: "How to install?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do i use the app?",
  },
  {
    type: "input",
    name: "credit",
    message: "Who is getting the credit?",
  },
  {
    type: "input",
    name: "contact",
    message: "What is your Github account?",
  },
  {
    type: "list",
    message: "Is your app licensed? Please select one of the list",
    name: "license",
    choices: [
      "Apache 2.0",
      
      "BSD-3 Clause",
      
      "CC0",
      
      "GNU GPL v3",
      
      "The Hippocratic License 2.1",
      
      "IBM Public Lincense 1.0",
      
      "MIT",

      "No license",
    ],
    validate(answer) {
      if (answer.length < 1) {
        return "You most choose one, if no license select The Unlicense";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "features",
    message: "What are the features of this app",
  },
];

// This functions generates the readme file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created readmeFile!")
  );
}

// This function is to initialize  
function init() {
  inquirer.prompt(questions).then((data) => {
    const content = generateMark(data);
    writeToFile("README.MD", content);
  });
}

// Function call to initialize app
init();
