/*
Finally, adding validation to ensure that user input provided is in the proper expected format.
*/

// include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// promisify returns responses in a promise object vs a callback function
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

class Questionnaire{
startQuestions() {
  inquirer
    .prompt({
      type: 'text',
      name: 'employeename',
      message: 'What is the Manager\'s name?'
    })
    .then(({ name }) => {
      this.manager = new Manager(name);
      console.log(employee.name);
    })
    };
}

new Questionnaire().startQuestions();