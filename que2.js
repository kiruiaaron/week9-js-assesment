//Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.


class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
   calculateAnnualSalary() {
      return this.salary * 12;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    calculateAnnualSalary() {
      const NormalAnnualSalary = super.calculateAnnualSalary();
      const bonus = 0.2; 
      console.log(`Bonus (20% of the base salary): ${bonus}`);
      return (bonus * NormalAnnualSalary) + NormalAnnualSalary;
    }
  }


  //First instance of the Manager class
  const manager = new Manager('James Madison',10000, 'football');
  const annualSalary = manager.calculateAnnualSalary();
  
  console.log(`Manager: ${manager.name}`);
  console.log(`Department: ${manager.department}`);
  console.log(`Annual Salary: $${annualSalary}`);
  
  //Second instance of the Manager class
  const manager1 = new Manager('Steve Harvey', 20000, 'Entertainment');
  const annualSalary1 = manager1.calculateAnnualSalary();
  
  console.log(`Manager: ${manager1.name}`);
  console.log(`Department: ${manager1.department}`);
  console.log(`Annual Salary: $${annualSalary1}`);