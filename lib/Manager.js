// In addition to Employee's properties and methods, Manager will also have:
// officeNumber
// getRole() // Overridden to return 'Manager'
const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = 'Manager';
  }

  getOfficeNumber(){
    return this.officeNumber;
  }

  getRole() {
    return this.role;;
  }
}

module.exports = Manager;