import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="container mb-3">
            <h3 className="text-center text-bg-success p-2">Login Form</h3>
            <form>
                
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="SECRET" />
                </div>
                <button className="btn btn-primary w-100 mt-3">Login</button>
                <Link to="/register" className="text-center nav-link" >Don't you have account? Register Here</Link>
            </form>
        </div>
    );
}

export default Login;