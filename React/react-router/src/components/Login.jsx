import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({setLoggedIn}) {
    const [user,setUser]=useState({email:'',password:''})
    const navigate= useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(user.email=='admin@gmail.com'&& user.password=='admin123'){
            alert("Login succsessfull");
            setLoggedIn(true);
            navigate('/dashboard');
        }else{
            alert("Invalid credentials");
            setUser({email:'',password:''})
        }
    }
    return (
        <div className="container mb-3">
            <h3 className="text-center text-bg-success p-2">Login Form</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com"
                    value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="SECRET"
                    value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} />
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
                <Link to="/register" className="text-center nav-link" >Don't you have account? Register Here</Link>
            </form>
        </div>
    );
}

export default Login;