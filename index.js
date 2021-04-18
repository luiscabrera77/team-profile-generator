// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// promisify returns responses in a promise object vs a callback function
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
// local requirements and exports
const generateHTML = require('./src/template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// store answers in this array
let fullTeam = [];
const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Add Team members functions
function addManager() {
  inquirer
    .prompt([
      {
        name: 'employee_name',
        message: 'What is the Manager\'s name?',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('You need to enter a name.');
            return false;
          }
        }
      },
      {
        name: 'employee_id',
        message: 'What is the Manager\'s Employee ID?',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('You need to enter an ID.');
            return false;
          }
        }
      },
      {
        name: 'employee_email',
        message: 'What is the Manager\'s email?',
        validate: input => {
          if (input.match(mailFormat)) {
            return true;
          } else {
            console.log('You need to enter a valid email');
            return false;
          }
        }
      },
      {
        name: 'manager_office',
        message: 'What is the Manager\'s Office Number?',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('You need to enter an Office Number');
            return false;
          }
        }
      },
    ])
    .then(function (data) {
      const {employee_name, employee_id, employee_email, manager_office} = data
      fullTeam.push(new Manager(employee_name, employee_id, employee_email, manager_office))
      askForMore();
    });
  };

function askForMore() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'employee_role',
        message: 'Would you add a new member to the team?',
        choices: ['Engineer', 'Intern', 'No, I´m done'],
      }
    ])
    .then(function (data) {
      switch (data.employee_role) {
        case 'Engineer':
          addEngineer();
          break;
        case 'Intern':
          addIntern();
          break;
        case 'No, I´m done':
          endTeam();
          break;
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        name: 'employee_name',
        message: 'What is the Engineer\'s name?',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('You need to enter a name.');
            return false;
          }
        }
      },
      {
        name: 'employee_id',
        message: 'What is the Manager\'s Employee ID?',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('You need to enter an ID.');
            return false;
          }
        }
      },
      {
        name: 'employee_email',
        message: 'What is the Engineer\'s email?',
        validate: input => {
          if (input.match(mailFormat)) {
            return true;
          } else {
            console.log('You need to enter a valid email.');
            return false;
          }
        }
      },
      {
        name: 'engineer_github',
        message: 'What is the Engineer\'s GitHub?',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('You need to enter a gitHub username.');
            return false;
          }
        }
      },
    ])
    .then(function (data) {
      const {employee_name, employee_id, employee_email, engineer_github} = data
      fullTeam.push(new Engineer(employee_name, employee_id, employee_email, engineer_github))
      askForMore();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        name: 'employee_name',
        message: 'What is the Intern\'s name?',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('You need to enter a name.');
            return false;
          }
        }
      },
      {
        name: 'employee_id',
        message: 'What is the Intern\'s Employee ID?',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('You need to enter an ID.');
            return false;
          }
        }
      },
      {
        name: 'employee_email',
        message: 'What is the Intern\'s email?',
        validate: input => {
          if (input.match(mailFormat)) {
            return true;
          } else {
            console.log('You need to enter a valid email.');
            return false;
          }
        }
      },
      {
        name: 'intern_school',
        message: 'What is the Intern\'s School?',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('You need to enter a school.');
            return false;
          }
        }
      },
    ])
    .then(function (data) {
      const {employee_name, employee_id, employee_email, intern_school} = data
      fullTeam.push(new Intern(employee_name, employee_id, employee_email, intern_school))
      askForMore();
    });
}

// when finished, send the array to the template and then generate the HTML
function endTeam() {
  console.log("Your team is done!")
  // console.log(fullTeam); // turn on to debug
  const generateContent = generateHTML(fullTeam);
  writeFileAsync('./dist/index.html', generateContent);
  console.log('HTML succesfully generated.');
};

// Start app by adding Manager
addManager();