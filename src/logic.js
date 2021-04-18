
const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateHTML = require('./template');

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
let fullTeam = [];

class Logic {

addManager() {
  inquirer
    .prompt([
      {
        name: 'employee_name',
        message: 'What is the Manager\'s name?',
      },
      {
        name: 'employee_id',
        message: 'What is the Manager\'s Employee ID?',
      },
      {
        name: 'employee_email',
        message: 'What is the Manager\'s email?',
      },
      {
        name: 'manager_office',
        message: 'What is the Manager\'s Office Number?',
      },
    ])
    .then(function (data) {
      const {employee_name, employee_id, employee_email, manager_office} = data
      const teamMember = new Manager(employee_name, employee_id, employee_email, manager_office);
      fullTeam.push(teamMember);
      askForMore();
    });
  };

// More team members
askForMore() {
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

addEngineer() {
  inquirer
    .prompt([
      {
        name: 'employee_name',
        message: 'What is the Engineer\'s name?',
      },
      {
        name: 'employee_id',
        message: 'What is the Manager\'s Employee ID?',
      },
      {
        name: 'employee_email',
        message: 'What is the Engineer\'s email?',
      },
      {
        name: 'engineer_github',
        message: 'What is the Engineer\'s GitHub?',
      },
    ])
    .then(function (data) {
      const {employee_name, employee_id, employee_email, engineer_github} = data
      const teamMember = new Engineer(employee_name, employee_id, employee_email, engineer_github);
      fullTeam.push(teamMember)
      askForMore();
    });
}

addIntern() {
  inquirer
    .prompt([
      {
        name: 'employee_name',
        message: 'What is the Intern\'s name?',
      },
      {
        name: 'employee_id',
        message: 'What is the Intern\'s Employee ID?',
      },
      {
        name: 'employee_email',
        message: 'What is the Intern\'s email?',
      },
      {
        name: 'intern_school',
        message: 'What is the Intern\'s School?',
      },
    ])
    .then(function (data) {
      const {employee_name, employee_id, employee_email, intern_school} = data
      const teamMember = new Intern(employee_name, employee_id, employee_email, intern_school);
      fullTeam.push(teamMember)
      askForMore();
    });
}

async endTeam() {
  console.log("Your team is done!")
  console.log(fullTeam);
  const generateContent = generateHTML(fullTeam);
  writeFileAsync('../dist/index.html', generateContent);
  console.log('HTML succesfully generated.');
};
}

module.exports = Logic;