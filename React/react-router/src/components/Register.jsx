function Register() {
    //create state
    return (
        <div className="container mb-3">
            <h3 className="text-center text-bg-warning p-2">Registration Form</h3>
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="John Doe" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="username" className="form-label">@UserName</label>
                    <input type="text" className="form-control" id="username" placeholder="JohnDoe11" />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="SECRET" />
                </div>
                <button className="btn btn-primary w-100 mt-3">Register</button>
            </form>
        </div>
    );
}

export default Register;