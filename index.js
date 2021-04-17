/*
Uses the Inquirer package (Links to an external site.).
Uses the Jest package (Links to an external site.) for a suite of unit tests.

The application must have these classes: Employee, Manager, Engineer, and Intern.
The first class is an Employee parent class with the following properties and methods:
name
id
email
getName()
getId()
getEmail()
getRole() // Returns 'Employee'

The other three classes will extend Employee.

In addition to Employee's properties and methods, Manager will also have:
officeNumber
getRole() // Overridden to return 'Manager'

In addition to Employee's properties and methods, Engineer will also have:
github // GitHub username
getGithub()
getRole() // Overridden to return 'Engineer'

In addition to Employee's properties and methods, Intern will also have:
school
getSchool()
getRole() // Overridden to return 'Intern'

Finally, adding validation to ensure that user input provided is in the proper expected format.
*/