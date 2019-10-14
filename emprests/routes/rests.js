const express=require('express');
const router=express.Router()
// const UserDao=require('../database/userdao');
const validate=require('../database/validate');
const { check, validationResult,checkSchema  } = require('express-validator/check');



const empdao=new EmployeeDao();

router.get('/',async(req,res,next)=>{
     let user=await empdao.getEmployeeList();
     res.json(user);
    
});

router.post('/',checkSchema(validate),async(req,res,next)=>
 {
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
    }

    const employee=req.body;
   console.log(employee);
   let employeeRequest=await empdao.addEmployee(employee);
   res.json(employeeRequest);
  
 

   
  });

 


  
  module.exports = router;
  
