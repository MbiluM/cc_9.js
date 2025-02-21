// Task 1 - Created Employee Class
class Employee { // Initialize employee
    constructor(name, id, department, salary){
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }
    getDetails(){ //display of employee info
        console.log(`Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`);
    }
    calculateAnnualSalary() { //calculate annual salary
        return this.salary * 12;
    }
}
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails());
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); 
// Expected output: 60000


// Task 2 - Created Manager Class with Inheritance
class Manager extends Employee {
    constructor (name, id, department, salary, teamSize) {
    super(name, id, department, salary)
    this.teamSize = teamSize
    };
    getDetails() {
    console.log(`Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`);
    };
    calculateBonus() {
    return this.calculateAnnualSalary() * 0.1;
    };
}
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
console.log(mgr1.calculateBonus()); 
// Expected output: 9600

