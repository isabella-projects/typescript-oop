import { v4 as uuidv4 } from 'uuid';
import { Helper } from '../inc/helpers';
import { OutputTypes } from '../inc/types';

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

export class ObjectToJson extends WelcomeMessage {
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

export class Department {
    protected employees: { id: string; name: string }[] = [];
    protected helper: Helper;

    constructor(private readonly id: string, public name: string) {
        this.helper = new Helper();
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
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
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        const root = this.helper.getRoot()!;
        this.helper.expandHtmlAndLog(root, 'Reporting', `Reports: ${this.reports}`);
    }
}
