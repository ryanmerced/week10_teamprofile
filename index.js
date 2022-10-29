const inquirer = require("inquirer");
const fs = require("fs");
const team = require("./src/teamHTML");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamRoster  = [];

function managerQuestions() {
    inquirer
     .prompt([
        {
            type: "input",
            name: "name", 
            message: "What is the manager's name?",
        },
        {
            type: "input",
            name: "id", 
            message: "What is the manager's ID?",
        },
        {
            type: "input",
            name: "email", 
            message: "What is the manager's email?",
        },
        {
            type: "input",
            name: "location", 
            message: "What is the manager's office location?",
        },
     ]).then((answers) => {
        console.log(answers);
        const { name, id, email, location } = answers;
        const manager = new Manager(name, id, email, location);

        const addManager = {
            title: manager.getTitle(),
            name: manager.getName(),
            id: manager.getId(),
            email: manager.getEmail(),
            extra: manager.getLocation(),
        };
        teamRoster.push(addManager);
     });
     
}