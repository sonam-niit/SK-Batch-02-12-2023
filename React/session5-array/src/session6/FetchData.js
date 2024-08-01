import { useState } from "react";

function FetchData() {

    const [users, setUsers] = useState([]);
    const handleClick = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await resp.json();
            setUsers(json);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <button className="btn btn-primary" onClick={handleClick}>
                Get Data</button>
            <div className="row mt-2">
                {
                    users.map(user => (
                        <div className="col-md-4" key={user.id}>
                            <div className="card mb-2" style={{width:'18rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title">{user.name}</h5>
                                    <p class="card-text">
                                        Email:{user.email} <br/>
                                        Address:{user.address.street},{user.address.suite},
                                        {user.address.city},{user.address.zipcode} <br/>
                                        Website: {user.website} <br/>
                                        Phone: {user.phone}
                                    </p>
                                    <a href="#" class="btn btn-warning">{user.company.name}</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FetchData;