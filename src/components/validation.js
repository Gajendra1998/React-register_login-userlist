const validation = (values) => {
    const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      const nameRegx= /^[a-zA-Z][a-zA-Z\s]*$/
    let errors={}; 
    if(!values.username){
        errors.username="Name is required"
    }else if (!nameRegx.test(values.username)){
        errors.username="Name must contain letters only "
    }
    if(!values.email){
        errors.email="Email is required"

    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid" 
    }  
    if(!values.number){
        errors.number="Number is reqired"
    }else if(values.number.length>10||values.number.length<10){
        errors.number="Number must be 10 digit long"
    }
    if(!values.password){
        errors.password="password is required"
    }else if(!regexPassword.test(values.password)){
        errors.password="password must contain number ,special character and 8 charcters long"
    }
    return errors;
}
export default validation;
