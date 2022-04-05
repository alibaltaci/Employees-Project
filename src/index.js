// import 
import {Request} from "./request";

// Elements

const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeeList = document.getElementById("employees");
const updateButton = document.getElementById("update");

// new request object 
const req = new Request("http://localhost:3000/employees");

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
