class Department {
    // private name: string;
    private employees: string[] = [];
    static fiscalYear = 2020;

    constructor(public name: string, public readonly id: string) {
        // console.log(Department.fiscalYear);
    }

    static createEmployee(name: string) {
        return { name: name };
    }
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
    constructor(id: string, private reports: string[]) {
        super('Accounting', id);
    }
    addReport(text: string) {
        this.reports.push(text);
    }
    printReport() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee('Max');
console.log('static method : ', employee1, 'static property : ', Department.fiscalYear);
const accounting = new AccountingDepartment('d1', []);

accounting.addReport('years');
accounting.addReport('secret');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
// // accounting.employees[2] = 'frydman';
accounting.name = 'Accounting2';
accounting.addEmployee('frydman');
accounting.printEmpployeeInformation();
accounting.describe();

accounting.printReport();

Math.PI;
