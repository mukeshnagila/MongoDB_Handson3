
const { addemployee, employeelist, deleteemployee, employeemoresalary, employeeMoreExpr, graduateEmployee, updateEmployeeSalary  } = require("../Controller/Controller");

const Route = require("express").Router();

Route.post("/addemployee", addemployee);

Route.get("/listemloyee", employeelist);

Route.get("/moresalary", employeemoresalary);

Route.get("/moreExp", employeeMoreExpr);

Route.get("/graduate", graduateEmployee);

Route.put("/update", updateEmployeeSalary);

Route.delete("/delemployee", deleteemployee);

module.exports = Route;