import * as Modules from './modules/Excercises';
import * as Functions from './inc/functions';
import * as Interfaces from './inc/interfaces';

/* IT Department is a extended subclass of our main Department */
const it = new Modules.ITDepartment('d1');

/* Adding an employee with a static method */
Modules.Department.createEmployee('Brian');
/* --------------------------------------- */
it.addAdmin('Robert');
it.addEmployee('John');
it.addEmployee('Alex');
it.printAdmins();
it.printEmployees();

/* Accounting Department is a extended subclass of our main Department */
/* **SINGLETON PATTERN** */
const accounting = Modules.AccountingDepartment.getInstance();
accounting.addEmployee('Christian');
accounting.addEmployee('Vanessa');
accounting.addReport('System shutdown multiple times with blue screen.');

/* Adding a report for the accounting department with a setter */
accounting.mostRecentReport = 'Year end Report';
accounting.printEmployees();
accounting.printReports();
/* ------------------------------------------------------------ */

/* Interfaces */
let user: Interfaces.Greetable;

user = new Modules.Person('Mill');
user.greet('Hi! I am');
/* ----------------------------- */

/* Discriminated Unions */
Functions.moveAnimal({
    type: 'bird',
    flyingSpeed: 140,
});

Functions.moveAnimal({
    type: 'horse',
    runningSpeed: 50,
});
/* -------------------- */

/* Type Casting */
const typeCast = new Modules.TypeCasting();
typeCast.attachEvents();
/* ----------------------------------------- */

/* Index Properties - Error Container example
const invalidEmail: Interfaces.ErrorContainer = {
    email: 'Not a valid E-Mail address.',
    username: 'Must start with a capital character!',
};

Functions.generateError(invalidEmail, 300);
/* ------------------------------------------ */

/* Function overloads example */
const result = Functions.add('Damyan', ' Minkov');
result.split(' ');
/* ------------------------------------------ */
