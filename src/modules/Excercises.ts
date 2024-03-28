import { v4 as uuidv4 } from 'uuid';
import { Helper } from '../inc/helpers';
import { OutputTypes } from '../inc/types';
import { Greetable } from '../inc/interfaces';

export class WelcomeMessage {
    protected helper: Helper;

    constructor() {
        this.helper = new Helper();
    }

    displayWelcomeMessage(displayWelcome: boolean = false) {
        if (displayWelcome) {
            const root = this.helper.getRoot()!;
            this.helper.expandHtml(root, this.helper.createTags('h1', 'Hello From TypeScript'));
        }
    }
}

export class ObjectToJSON extends WelcomeMessage {
    stringifyObject(object: Object) {
        const result = this.helper.objectToString(object);

        const root = this.helper.getRoot()!;
        this.helper.expandHtmlAndLog(root, 'Enums, types & more', result);
    }
}

export class UnionAliases extends WelcomeMessage {
    private instantiations = 0;

    combine(input1: number | string, input2: number | string, resultConversion: OutputTypes) {
        let result;
        if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
            result = +input1 + +input2;
        } else {
            result = input1.toString() + input2.toString();
        }

        this.instantiations++;

        const root = this.helper.getRoot()!;
        this.helper.expandHtmlAndLog(root, `Union Types Excercise №${this.instantiations}`, `Result is: ${result}`);

        return result;
    }
}

export abstract class Department {
    protected employees: { id: string; name: string }[] = [];
    protected helper: Helper;

    constructor(protected readonly id: string, public name: string) {
        this.helper = new Helper();
    }

    abstract describe(this: Department): void;

    static createEmployee(employeeName: string) {
        return {
            name: employeeName,
        };
    }

    addEmployee(employeeName: string) {
        const employeeId = uuidv4();

        const newEmployee = {
            id: employeeId,
            name: employeeName,
        };

        this.employees.push(newEmployee);
    }

    printEmployees() {
        const root = this.helper.getRoot()!;
        this.helper.expandHtmlAndLog(root, `Department ${this.name}`, `Employees: ${this.helper.objectToString(this.employees)}`);
    }
}

export class ITDepartment extends Department {
    protected admins: { id: string; name: string }[] = [];

    constructor(id: string) {
        super(id, 'IT');
    }

    describe() {
        console.log('IT Department - ID: ' + this.id);
    }

    addAdmin(adminName: string) {
        const adminId = uuidv4();

        const newAdmin = {
            id: adminId,
            name: adminName,
        };

        this.admins.push(newAdmin);
    }

    printAdmins() {
        const root = this.helper.getRoot()!;
        this.helper.expandHtmlAndLog(root, `${this.name} Headquarters`, `Team Leads: ${this.helper.objectToString(this.admins)}`);
    }
}

export class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            const root = this.helper.getRoot()!;
            this.helper.expandHtmlAndLog(root, 'Most Recent Report: ', this.lastReport);
            return this.lastReport;
        }
        throw this.helper.logError('No report found', 'fatal');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            this.helper.logError('Please pass a valid value', 'fatal');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        const root = this.helper.getRoot()!;
        this.reports.forEach((report, index) => {
            this.helper.expandHtmlAndLog(root, `Report ${index + 1}`, `Report: ${report}`);
        });
    }
}

export class Person implements Greetable {
    public name: string;
    protected helper: Helper;

    constructor(n: string) {
        this.name = n;
        this.helper = new Helper();
    }

    greet(phrase: string) {
        const root = this.helper.getRoot()!;
        this.helper.expandHtmlAndLog(root, 'Interfaces', `${phrase} ${this.name}`);
    }
}
