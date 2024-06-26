// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
var employeeFN;
var employeeLN;
var salary;
var moreEmployees = true;
let workers =[];

// Collect employee data
const collectEmployees = function(EmployeeFN, EmployeeLN, Salary) {
  // TODO: Get user input to create and return an array of employee objects
  
  while (moreEmployees == true) {
    employeeFN = prompt("What is the employee's first name?");
    employeeLN = prompt("What is the employee's last name?");
    salary = prompt("What is the employee's salary?");
    if (isNaN(salary)){
      alert ("Not a Number!");
      salary = 0;
    }

    var employee = {
      firstName: employeeFN,
      lastName: employeeLN,
      salary: parseFloat(salary)
    };

    workers.push(employee);

      if (confirm("Would you like to add another employee?") == true) {
        moreEmployees = true;
      }
      else{
        moreEmployees = false;
      }
    
  }
  return workers;
}

// Display the average salary
const displayAverageSalary = function(workers) {
  // TODO: Calculate and display the average salary
  let total = 0;
  for (let i = 0; i < workers.length; i++) {
    total += workers[i].salary;
  }
  let numEmployees = workers.length;
  let salaryAverage = total / numEmployees;
  console.log('The average salary of our (' + numEmployees + ') employees is ' + salaryAverage.toFixed(2) + '.');
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let winnerIndex = Math.floor(Math.random() * employeesArray.length);
  let winner = employeesArray[winnerIndex];
  console.log("Congratulations to " + winner.firstName + " " + winner.lastName + ", our raffle winner!");
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
