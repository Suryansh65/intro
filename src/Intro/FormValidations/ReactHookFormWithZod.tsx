import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from "zod";

const registerSchema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters'),
    email: z.email({ error: 'Please enter a valid email address' }),
    password: z.string().min(8, {error:"Password must be at least 8 characters"}),
    confirmPassword: z.string()
}).refine((data)=> data.password === data.confirmPassword, {
    error: 'Password do not match',
    path: ['confirmPassword'],
});

type RegisterFormData = z.infer<typeof registerSchema>;


export default function RegisterForm(){
    const {register,handleSubmit, formState:{errors},} = useForm({resolver: zodResolver(registerSchema),mode:'onBlur'});
    const onSubmit = (data: RegisterFormData)=>{
        console.log("Valid Form Data Submitted",data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <label htmlFor="username">Username: </label>
                <input {...register('username')} />
                {errors.username && <p style={{color:'red'}} >{errors.username.message}</p>}
            </div>

            {/* Email field */}
            <div>
                <label htmlFor="email">Email: </label>
                <input {...register('email')} />
                {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}
            </div>

            {/* Password field */}
            <div>
                <label htmlFor="password">Password: </label>
                <input {...register('password')} />
                {errors.password && <p style={{color:'red'}} >{errors.password.message}</p>}
            </div>

            {/* Confirm password field */}
            <div>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input {...register('confirmPassword')} />
                {errors.confirmPassword && <p style={{color:'red'}} >{errors.confirmPassword.message}</p>}
            </div>

            {/* submit button */}
            <button type='submit' >Submit</button>
        </form>
    )
}
