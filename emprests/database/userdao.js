const connection=require('./dbconfig');
class empdao{

    async getEmployeeList()
    {
        try{
           const employeeresult=await connection.query("Select * from employee");
           console.log(employeeresult);
           return employeeresult;
        }
        catch(error)
        {
            console.log(error);
        }
        
    }
    async addEmployee(employee)
    {
        try{
            const employeeresult=await connection.query("insert into employee(firstname,middlename,lastname,phone,emailid,address) values(?,?,?,?,?,?)",[employee.fname,employee.mname,employee.lname,employee.phone,employee.emailid,employee.add]);
            console.log(employeeresult);
            return employeeresult;

        }
        catch(error)
        {
            console.log(error)
        }
    }
   
    
}
module.exports=empdao