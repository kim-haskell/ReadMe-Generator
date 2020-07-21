const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const generateFile = require("./generatefile.js")


const questions = [
    {
        type: "input",
        name: "gitHubUserName",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"   
    },
    {
        type: "input",
        name: "projectName",
        message: "What is the project name?"   
    },
    {
        type: "input",
        name: "description",
        message: "What is the project description?"   
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"   
    },
    {
        type: "input",
        name: "usage",
        message: "What are the usage instructions?"   
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines?"   
    },
    {
        type: "input",
        name: "test",
        message: "What are the code and technologies used?"   
    },
    {
        type: "list",
        name: "license",
        message: "What license does the project have?", 
        choices: [
            "MIT",
            "Apache 2.0",
            "GPL 3.0",
            "BSD",
            "None"
        ]   
    }



]

function writeToFile (filename, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data)
}

function init () {
    inquirer.prompt(questions)
    .then(
        (inquirerResponses) => {
            console.log("Creating your ReadMe file");
            writeToFile("README.md", generateFile({
                ...inquirerResponses
            }))
        }
    )
}

init ();