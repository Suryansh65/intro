import { useState } from "react";

export default function LoginForm(){
    const [formData, setFormData] = useState({email:"", password: ""});
    const [errors,setErrors] = useState({email:"",password:""});

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }

    //validate form
    const validateForm = ()=>{
        const newErrors = {email:"",password:""};

        let isValid = true;

        if(!formData.email.trim()){
            newErrors.email = 'Email is required';
            isValid = false;
        }else if(!formData.email.includes('@')){
            newErrors.email = 'Invalid Email';
            isValid = false;
        }

        //password validation
        if(!formData.password.trim()){
            newErrors.password = 'Password is required';
            isValid = false;
        }else if(formData.password.length < 6){
            newErrors.password = 'Password must be 6 characters';
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    }

    // handle Submit
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(validateForm()){
            console.log("Form submitted Successfully!",formData);

        }else{
            console.log("error while submitting form",errors);
        }
    }
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <label>Email: </label>
                <input 
                type="text"
                name="email"
                value={formData.email}
                placeholder="Enter email" 
                onChange={handleChange}
                />
                {errors.email && <p style={{color:"red"}} >{errors.email}</p>}
            </div>

            {/* password field */}
            <div>
                <label>Password: </label>
                <input 
                type="text"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange} 
                />
            </div>
            {errors.password && <p style={{color:"red"}} >{errors.password}</p>}
            <button type="submit" >Submit</button>
        </form>
    )
}