export default function validateForm(name,email,username,mobile,isChecked){

    let valid=true;
    //if any filed is false it means it is not invalid and if it is true it means it is invalid 
    let invalid= {
        name:false,
        email:false,
        username:false,
        mobile:false,
        isChecked:false

    }
  

    //to validate empty inputs fields
    if(!name || !email || !username || !mobile || !isChecked)
    {   valid = false
        invalid.name=!name,
        invalid.email=!email,
        invalid.username=!username,
        invalid.mobile=!mobile,
        invalid.isChecked=!isChecked

       

        return {
            valid,invalid
        }

    }

   

    //Regular expression to check email is valid email and mobile no is 10 digit valid mobile no or not
    const emailRegEx=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const mobileRegEx= /^\d{10}$/
    if(!emailRegEx.test(email) || !mobileRegEx.test(mobile))
    {  valid=false
        invalid={...invalid,
                 email:!emailRegEx.test(email),
                 mobile:!mobileRegEx.test(mobile)
        }
        
       
       
        return {
            valid,invalid
        }
    }

    //returning valid as true and all invalid.property as false if no input field is empty and email and mobile are in correct form 
    
   
    return {
        valid, invalid
    
}
}