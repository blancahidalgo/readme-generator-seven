// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
{
type: "input",
name: "name",
message: "What is your name?",
},

{
type: "input",
name: "title",
message: "What is the title of your project?",
},

{
type: "input",
name: "description",
message: "Please describe the purpose of your project",
},

{
type: "input",
name: "installation",
message: "Please describe installation instructions",
},

{
type: "input",
name: "usage",
message: "Please describe usage information",
},

{
type: "input",
name: "contribution",
message: "Please list here all other contributors",
},

{
type: "input",
name: "tests",
message: "Please explain tests that have taken place?",
},

{
type: "checkbox",
name: "license",
choices: ["MIT","APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
},

{
type: "input",
name: "github",
message: "What is your GitHub username?",
},

{
type: "input",
name: "email",
message: "What is your contact email?",
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((inquirerResponses) => {
console.log("Generating README...");
writeToFile("./dist/README.md", generateMarkdown({ ...inquirerResponses }));
});
}
// Function call to initialize app
init();
