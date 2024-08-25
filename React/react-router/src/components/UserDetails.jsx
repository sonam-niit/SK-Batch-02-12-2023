import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
    const {id}=useParams();
    const [user,setUser]=useState(null);
    const fetchData=async()=>{
        try {
            const resp=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            setUser(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return ( 
        <div className="container">
            <h3>User Details</h3>
            {
                user ?
                <>
                    <h4>Welcome {user.name}</h4>
                    <p>
                        Email:{user.email} <br/>
                        Phone:{user.phone}<br />
                        Website:{user.website}<br />
                        Username:{user.username}<br />
                        Address:{user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode}<br />
                        Company:{user.company.name}, {user.company.catchPhrase} <br />
                    </p>
                </>
                : <p>loading.....</p>
            }
        </div>
     );
}

export default UserDetails;