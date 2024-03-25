import './style.css';

import * as Modules from './modules/Excercises';

/* IT Department is a extended subclass of our main Department */
const it = new Modules.ITDepartment('d1');
it.addEmployee('John');
it.addEmployee('Alex');
it.addAdmin('Robert');
it.printAdmins();
it.printEmployees();

/* Accounting Department is a extended subclass of our main Department */
const accounting = new Modules.AccountingDepartment('d2', []);
accounting.addEmployee('Christian');
accounting.addEmployee('Vanessa');
accounting.addReport('System shutdown multiple times with blue screen.');
accounting.addReport('Reporting has never been so easy.');
accounting.printEmployees();
accounting.printReports();
