const employeeValidate={
    fname: {
        exists:{
          errorMessage: 'Name is missing',
        },
        isLength: {
          errorMessage: 'Name should be at least 7 chars long',
          // Multiple options would be expressed as an array
          options: { min: 7 }
        },
      },
      
     mname:{
      exists:{
        errorMessage:'middlename is missing',
      },
      isLength:{
        errorMessage:'middlename should be  atleast 7 digits long',
        options:{min:5}
      },
    },
    
    lname:{
        exists:{
            errorMessage:'lastname is missing',
        },
        isLength:{
            errorMessage:'lastname should be atleast 7 digits long',
            options:{min:5}
        }
    },

    phone:{
         exists:{
             errorMessage:'phone is missing',
         },
         isLength:
         {
             errorMessage:'phone should be atleast 10 digits long',
             options:{min:10}
         }
    },

    emailid:{
        exists:{
            errorMessage:'emailid is missing',
        },
        isEmail:{
            errorMessage:'it should be an email',

        }


    },
    add:{
      exists:{
          errorMessage:'add is missing',
      },
      isLength:{
          errorMessage:'add should be atleast 15 digits long',
          options:{min:15}
      }
    }

}
module.exports=employeeValidate;