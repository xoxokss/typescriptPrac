class Department {
    // private name: string;
    protected employees: string[] = [];

    constructor(public name: string, public readonly id: string) {}

    describe(this: Department) {
        console.log(`Department (${this.id} : ${this.name})`);
    }
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmpployeeInformation() {
        console.log('people : ', this.employees.length);
        console.log(this.employees);
    }
}

const engineering = new Department('Engineering', 'd2');

engineering.describe();
engineering.addEmployee('Paul');

engineering.printEmpployeeInformation();

// const accountingCopy = { name: 'Dummy', describe: accounting.describe };

// console.log(accounting);

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super('IT', id);
        this.admins = admins;
    }
}

const blockchain = new ITDepartment('d3', ['Sangseon']);
blockchain.addEmployee('Marie');
blockchain.addEmployee('Sangseon');
blockchain.name = 'BCTEAM';
blockchain.describe();
console.log(blockchain);

class AccountingDepartment extends Department {
    private lastReport : string;

    get mostRecentReport () {
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error("No report found.")
    }

    set mostRecentReport (value) {
        if (!value){
            throw new Error("Please pass in valid value.")
        }
        this.addReport(value)
    }

    constructor(id: string, private reports: string[]) {
        super('Accounting', id);
        this.lastReport = reports[0];
    }
    addEmployee(employeeName: string) {
        console.log("input name : ", employeeName)
        if (employeeName == 'Max') {
            return;
        }
        this.employees.push(employeeName);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport() {
        console.log(this.reports);
    }
}

const accounting = new AccountingDepartment('d1', []);

accounting.addReport('Year Start Report');

console.log(accounting.mostRecentReport);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('secret');
accounting.name = 'Accounting2';
accounting.addEmployee('frydman');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmpployeeInformation();
accounting.describe();

accounting.printReport();
