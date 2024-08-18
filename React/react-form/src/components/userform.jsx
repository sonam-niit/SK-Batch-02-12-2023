import axios from "axios";
import { useState } from "react";

function UserForm({fetchData}) {
    const [user,setUser]=useState({name:'',email:'',username:'',password:''});
    const handleSubmit=async (e)=>{
        e.preventDefault();
        // const resp= await fetch('http://localhost:5000/api/user',{
        //     method:'POST',
        //     body:JSON.stringify(user),
        //     headers:{
        //         "content-type":'application/json'
        //     }
        // });
        const resp=await axios.post('http://localhost:5000/api/user',user);
        console.log(resp);
        
        if(resp.status==201){
            alert('User registered..');
            fetchData();
            setUser({name:'',email:'',username:'',password:''});
        }else{
            alert("error in registration")
        }
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Name</label>
                    <input type="text" placeholder="Enter name" className="form-control"
                    value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label>Name</label>
                    <input type="text" placeholder="Enter Username" className="form-control"
                    value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" placeholder="Enter Email" className="form-control"
                    value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" className="form-control"
                    value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Register</button>
            </form>
        </div>
     );
}

export default UserForm;