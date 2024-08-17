import { useState } from "react";

function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [errors,setErrors]=useState({});
    const handleSubmit=(e)=>{
        const emailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const passwordPattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        e.preventDefault();
        const validationErrors={};
        if(!email){
            validationErrors.email="Email is Required";
        }else if(!emailPattern.test(email)){
            validationErrors.email="Email Id is notvalid"
        }
        if(!password){
            validationErrors.password="Password is Required";
        }else if(!passwordPattern.test(password)){
            validationErrors.password="Password is Invalid";
        }
        if(Object.keys(validationErrors).length>0){
            setErrors(validationErrors)
        }else{
            setErrors({});
            alert("Form is submitted for Approval")
        }
    }
    return (
        <form onSubmit={handleSubmit} noValidate>
            <h3 className="my-3 text-center p-2 text-bg-secondary">Login Page</h3>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" 
                className={`form-control ${errors.email?'is-invalid':''}`} id="email" placeholder="name@example.com" 
                onChange={(e)=>setEmail(e.target.value)} value={email}/>
                {errors.email &&<div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" id="password" 
                className={`form-control ${errors.password?'is-invalid':''}`} 
                onChange={(e)=>setPassword(e.target.value)} value={password}/>
                {errors.password &&<div className="invalid-feedback">{errors.password}</div>}
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
            </div>
            <button className="btn btn-primary mt-3 w-100" type="submit">Login</button>
        </form>
    );
}

export default Login;