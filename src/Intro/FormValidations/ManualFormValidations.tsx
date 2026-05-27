import { useState} from "react";

export default function LoginForm(){
    const [formData, setFormData] = useState({email: "",password:""});
    const [errors,setErrors] = useState({email:"",password:""});

    //handle change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    };

    //Validate Form
    const validateForm = ()=>{
        const newErrors: {email:string,password:string} = {email: '',password:''};

        if(!formData.email){
            newErrors.email = 'Email is required';
        }else if(!formData.email.includes('@')){
            newErrors.email = 'Email is Invalid';
        }

        if(!formData.password){
            newErrors.password = 'Password is required';
        }else if(formData.password.length < 6){
            newErrors.password = 'Password must be atleast 6 characters'
        }
        setErrors(newErrors);
        return !newErrors.email && !newErrors.password;
    }

    //handle Submit
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        //validate the form
        if(validateForm()){
            console.log("Form Submitted Successfully!", formData);
        }else{
            console.log("Validation Failed");
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Email:
                </label>
                <input 
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                />
                {/* Email Errors */}
                {errors.email && <p style={{color: 'red'}} >{errors.email}</p>}
            </div>

            {/* Password field */}
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
                {/* password errors line */}
                {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
            </div>
        </form>
    )

}
