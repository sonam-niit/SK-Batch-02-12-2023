import { useState } from "react";

function UserForm({ addData }) {
    const [user, setUser] = useState({ name: '', email: '', country: '' })
    const handleSubmit = () => {
        if (user.name=='' || user.email=='' || user.country=='') {
            alert('All fields are mandatory')
        } else {
            user.id = Date.now()
            addData(user);//pass the full user object from child to parent
            alert('User added successfully');
            setUser({ name: '', email: '', country: '' })
        }

    }
    return (
        <div>
            <h3>User Form Component</h3>
            <input type="text" className="form-control mt-3" placeholder="Name"
                value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
            <input type="text" className="form-control mt-3" placeholder="Email"
                value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <input type="text" className="form-control mt-3" placeholder="country"
                value={user.country} onChange={(e) => setUser({ ...user, country: e.target.value })} />
            <button className="btn btn-primary my-3 w-100"
                onClick={handleSubmit}>Add User</button>
        </div>
    );
}

export default UserForm;