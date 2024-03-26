import './style.css';

import * as Modules from './modules/Excercises';
import * as Functions from './inc/functions';

/* IT Department is a extended subclass of our main Department */
const it = new Modules.ITDepartment('d1');

/* Adding an employee with a static method */
const employee = Modules.Department.createEmployee('Brian');
Functions.log(employee);
/* --------------------------------------- */
it.addAdmin('Robert');
it.addEmployee('John');
it.addEmployee('Alex');
it.printAdmins();
it.printEmployees();

/* Accounting Department is a extended subclass of our main Department */
/* -- We can only once instantiate this class, because there is only 1 accounting department possible -- */
const accounting = Modules.AccountingDepartment.getInstance();
accounting.addEmployee('Christian');
accounting.addEmployee('Vanessa');
accounting.addReport('System shutdown multiple times with blue screen.');

/* Adding a report for the accounting department with a setter */
accounting.mostRecentReport = 'Year end Report';
/* ------------------------------------------- */

accounting.printEmployees();
accounting.printReports();

/* Logging out the most recent report with getter to the console and to the DOM */
Functions.log(accounting.mostRecentReport);
/* ------------------------------------------------------------ */
