abstract class Department {
  static fiscalYear = 2020
  // private readonly id: string
  // private name: string
  // private employees: string[] = []
  protected employees: string[] = []

  // constructor(n: string){
  //   this.name = n
  // }
  constructor(protected readonly id: string, public name: string){
    console.log(Department.fiscalYear)
  }

  static createEmployee(name: string){
    return { name }
  }

  abstract describe(this: Department): void
  // {
  //   console.log(`Department : ${this.name} and the Id is : ${this.id}`)
  // }

  addEmployee(employee: string){
    this.employees.push(employee)
  }

  printEmployees(){
    this.employees.map( employee => console.log(employee))
  }
}


class ITDepartment extends Department {
  constructor(id: string, public admins: string[]){
    super(id, 'IT Department')
  }
  describe(){
    console.log('IT Department with id ' + this.id)
  }
}

// const accounting = new Department('d1', 'Accouting')
// console.log(accounting)
// accounting.describe()

// accounting.addEmployee('Himal')
// accounting.addEmployee('Sudhir')
// accounting.printEmployees()

// const accountingCopy = {...accounting, name:'Billing', describe: accounting.describe, addEmployee: accounting.addEmployee, printEmployess: accounting.printEmployess }
// accountingCopy.describe()

const itDepartment = new ITDepartment('d2', ['Max'])
console.log(itDepartment)
itDepartment.describe()

class AccountingDepartment extends Department {
  private lastReport: string | undefined;
  private static instance: AccountingDepartment;
  private constructor(id: string, private reports: string[]){
    super(id, 'Accounting')
  }

  static getInstance(){
    if (AccountingDepartment.instance){
      return this.instance
    }
    this.instance = new AccountingDepartment('account_id',[])
    return this.instance
  }

  addEmployee(employee: string){
    if(employee === 'Max'){
      console.error('Max is not an employee')
    } else {
      this.employees.push(employee)
    }
  }

  addReport(text: string){
    this.reports.push(text)
    this.lastReport = text
  }

  getReports(){
    console.log('The reports are')
    this.reports.map((e,i) => console.log(`${i+1} : ${e}`))
  }

  get mostRecentReport(){
    if (this.lastReport){
      return this.lastReport
    }
    throw new Error('No Report found')
  }

  set mostRecentReport(value: string){
    if (!value){
      throw new Error('Please pass a value')
    }
    this.addReport(value)
  }

  describe(){
    console.log('Accounting Department with id ' + this.id)
  }
}

// const accountingDepartment = new AccountintDepartment('d3', [])
const accountingDepartment = AccountingDepartment.getInstance()
// console.log(accountingDepartment.mostRecentReport)
accountingDepartment.mostRecentReport = 'New Report 1'
accountingDepartment.mostRecentReport = 'New Report 2'
accountingDepartment.getReports()
accountingDepartment.addEmployee('Max')
accountingDepartment.addEmployee('Sugar')
accountingDepartment.addEmployee('Salt')
accountingDepartment.printEmployees()
console.log('Recent: ',accountingDepartment.mostRecentReport)

const accountingDepartment2 = AccountingDepartment.getInstance()
console.log(accountingDepartment)
console.log(accountingDepartment2)

const employee1 = Department.createEmployee('Rita')
console.log(employee1)
console.log(Department.fiscalYear)