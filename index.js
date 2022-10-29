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

        promptQuestions();
     });
     
}
function promptQuestions() {
    inquirer
      .prompt([
        {
          name: "teamMember",
          type: "list",
          choices: ["Engineer", "Intern", "Done with adding team member"],
          message: "What type of team member would you like to add?",
        },
      ])
      .then((answers) => {
        if (answers.teamMember === "Engineer") {
          engineerQuestions();
        }
        if (answers.teamMember === "Intern") {
          internQuestions();
        } 
          startCollectingData();
        
      });
}

function engineerQuestions() {
    engineerData = inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "What is the employee's name?",
        },
        { 
          name: "id",
          type: "input",
          message: "What is the employee's ID number?",
        },
        {
          name: "email",
          type: "input",
          message: "What is the employee's email address?",
        },
        {
          name: "github",
          type: "input",
          message: "What is the employee's GitHub username?",
        },
      ])
      .then((answers) => {
        console.log(answers.engineerQuestions);
  
        const { name, id, email, github } = answers;
  
        const engineer = new Engineer(name, id, email, github);
  
        const addEngineer = {
          title: engineer.getTitle(),
          name: engineer.getName(),
          id: engineer.getId(),
          email: engineer.getEmail(),
          extra: engineer.getGithub(),
        };
        
        teamRoster.push(addEngineer);
        promptQuestions();
        if (promptQuestions.answer !== "Engineer" || "Intern") {
        
        };
      
    });
}

function internQuestions() {
    internData = inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "What is the employee's name?",
        },
        { 
          name: "id",
          type: "input",
          message: "What is the employee's ID number?",
        },
        {
          name: "email",
          type: "input",
          message: "What is the employee's email address?"
  
        },
        {
          name: "school",
          type: "input",
          message: "What is the name of the employee's school?",
        },
      ])
      .then((answers) => {
        const { name, id, email, school } = answers;
  
        const intern = new Intern(name, id, email, school);
  
        const addIntern = {
          title: intern.getTitle(),
          name: intern.getName(),
          id: intern.getId(),
          email: intern.getEmail(),
          extra: intern.getSchool(),
        };
        teamRoster.push(addIntern);
        promptQuestions();
        if (promptQuestions.answers !== "Engineer" || "Intern") {
          
        };
        
  
      });
  };

  function getExtra() {
    if (Employee.getTitle === "Engineer") {
        return Engineer.getGithub();
    }
    if (getRole === "Intern") {
        return Intern.getSchool();
    }
    if (getRole === "Manager") {
        return Intern.getLocation();
    };
    teamRoster.push(getExtra);
  };

  function startCollectingData() {
    const newFile = team(teamRoster);

    fs.writeFile("./dist/myTeam.html", newFile, function (err) {
        if (err) throw err;
        else console.log("success");
        
      });
  }

  managerQuestions();