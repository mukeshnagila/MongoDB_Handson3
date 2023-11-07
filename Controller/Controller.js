const userAccount = require("../Model/registeremployee");

const addemployee = async(req,res) => {
    try{
        // const details = req.body;
        const details = [{
            "firstName": "John",
            "lastName": "Doe",
            "salary": "25000",
            "department": "HR",
            "lastCompany": "X",
            "lastSalary": "10000",
            "overallExp": "2",
            "contactInfo": "1234567890",
            "yearGrad": "2016",
            "gradStream": "CSE"
          },{
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "roh",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          },{
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          },{
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          }]

        const adddata = await userAccount.create(details);
        console.log(adddata);
        // return res.send(adddata)
        res.send("added Successfully");
    }catch(err){
        console.log("error in add data", err);
    }
}

const employeelist = async(req,res) => {
    // const details = req.body;
    const listdata = await userAccount.find({});
    console.log(listdata);
    // res.send("This is the total employee list");
    res.json(listdata);
}

const employeemoresalary = async(req, res) => {
    // const details = req.body;
    const listdata2 = await userAccount.find({});
    console.log(listdata2);
    const moresalary = await userAccount.find({salary: {$gt : "30000"}});
    console.log(moresalary);
    // res.send("This is the total employee list who having more then 30000+ salary");
    res.json(moresalary);
}

const employeeMoreExpr = async(req, res) => {
    // const details = req.body;
    const listdata2 = await userAccount.find({});
    console.log(listdata2);
    const moreExpr = await userAccount.find({overallExp: {$gt : "2"}});
    console.log(moreExpr);
    // res.send("This is the total employee list who having more then 2+ year Expreance");
    res.json(moreExpr);
}

const graduateEmployee = async(req, res) => {
    // const details = req.body;
    const listdata2 = await userAccount.find({});
    console.log(listdata2);
    const graduate = await userAccount.find({yearGrad: {$gt : "2015"}, overallExp : {$gt : "1"}});
    console.log(graduate);
    // res.send("This is the total employee list who having more then 1+ year Expreance and graduate after 2015");
    res.json(graduate);
}

const updateEmployeeSalary = async(req, res) => {
    // const details = req.body;
    // const listdata2 = await userAccount.find({});
    // console.log(listdata2);
    const updatedSalary = await userAccount.updateMany({salary : {$gt : "70000"}}, {$set : {salary : "65000"}});
    console.log(updatedSalary);
    // res.send("This is the updated salary list");
    res.json(updatedSalary); 
}

const deleteemployee = async(req,res) => {
    // const details = req.body;
    const deldata = await userAccount.deleteMany({lastCompany: "Y"});
    console.log(deldata);
    res.send("Delete Successfully");
}


module.exports = {addemployee, employeelist, deleteemployee, employeemoresalary, employeeMoreExpr, graduateEmployee, updateEmployeeSalary}