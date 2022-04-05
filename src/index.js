// import 
import {Request} from "./request";
import { UI } from "./ui";

// Elements

const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateButton = document.getElementById("update");

// new request object 
const req = new Request("http://localhost:3000/employees");

// new ui object
const ui = new UI();

let updateState = {
                        updateId : null,
                        updataParent : null
                    };

// get request

// req.get()
// .then(employees => console.log(employees)) // new promise
// .catch(err => console.log(err));

// post request

// req.post({name:"Emirhan", department:"Finans", salary:"10000"})
// .then(employees => console.log(employees))
// .catch(err => console.log(err));

// put request

// req.put(4, {name:"Hasan", department:"Pazarlama", salary:"10000"})
// .then(employees => console.log(employees))
// .catch(err => console.log(err));

// delete request 

// req.delete(7)
// .then(employees => console.log(employees))
// .catch(err => console.log(err));


eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoaded", getAllEmployees);
    form.addEventListener("submit", addEmployee);
    employeesList.addEventListener("click", updateOrDelete);
    updateButton.addEventListener("click", updateEmployee);
}

function getAllEmployees(){

    req.get()
    .then(employees => {
        ui.addAllEmployeesToUI(employees);
    })
    .catch(err => console.log(err));
}

function addEmployee(e){

    const employeeName = nameInput.value.trim();
    const employeeDepartment = departmentInput.value.trim();
    const employeeSalary = salaryInput.value.trim();

    if(employeeName === "" || employeeDepartment === "" || employeeSalary === ""){
        alert("Lütfen tüm alanları doldurun.");
    }
    else{
        req.post({name:employeeName, department:employeeDepartment, salary:Number(employeeSalary)})
        .then(employee => {
            ui.addEmployeeToUI(employee);
        })
        .catch(err => console.log(err));
    }

    ui.clearInputs();
    e.preventDefault();
}

function updateOrDelete(e){

    if(e.target.id === "delete-employee"){
        deleteEmployee(e.target);
    }
    else if(e.target.id === "update-employee"){
        updateEmployeeController(e.target.parentElement.parentElement);
        console.log(e.target.parentElement.parentElement);
    }
}

function deleteEmployee(targetEmployee){

    const id = targetEmployee.parentElement.previousElementSibling.previousElementSibling.textContent;

    req.delete(id)
    .then(employee => {
        ui.deleteEmployeeFromUI(targetEmployee.parentElement.parentElement);
    })
    .catch(err => console.log(err));
}

function updateEmployeeController(targetEmployee){

    ui.toggleUpdateButton(targetEmployee);

    if(updateState.updateId === null || targetEmployee.children[3].textContent !== updateState.updateId){

        updateState = {
            updateId : targetEmployee.children[3].textContent,
            updateParent : targetEmployee
        }
    }
    else{
        updateState.updateId = null;
    }
}

function updateEmployee(){

    if(updateState){
        const data = {name:nameInput.value.trim(), department:departmentInput.value.trim(), salary:Number(salaryInput.value.trim())}

        req.put(updateState.updateId, data)
        .then(updatedEmployee => {
            ui.updateEmployeeOnUI(updatedEmployee, updateState.updateParent);
        })
        .catch(err => console.log(err));
    }
}