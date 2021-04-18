// include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/template");
// promisify returns responses in a promise object vs a callback function
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function startQuestions() {
  return inquirer
    .prompt([
    {
      name: 'employee_name',
      message: 'What is the Manager\'s name?',
      validate: employee_name => {
        if (employee_name) {
          return true;
        } else {
          console.log('You need to enter a name');
          return false;
        }
      }
    },
    {
      name: "employee_id",
      message: "What is the Manager\'s Employee ID?",
      validate: employee_id => {
        if (employee_id) {
          return true;
        } else {
          console.log('You need to enter an ID');
          return false;
        }
      }
    },
    {
      name: "employee_email",
      message: "What is the Manager\'s email?",
      validate: employee_email => {
        if (employee_email) {
          return true;
        } else {
          console.log('You need to enter an email');
          return false;
        }
      }
    },
    {
      name: "manager_office",
      message: "What is the Manager\'s Office Number?",
      validate: manager_office => {
        if (manager_office) {
          return true;
        } else {
          console.log('You need to enter an office');
          return false;
        }
      }
    },
  ])
  .then (
    
  );
  };

// TODO: Create a function to initialize app and write README file
async function init() {
  try {
      const info = await startQuestions();
      const generateContent = generateHTML(info);
      await writeFileAsync('./dist/index.html', generateContent);
      console.log('HTML succesfully generated.');
  } catch (err) {
      console.log(err);
  }
}

init();