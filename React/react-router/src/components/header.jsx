import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="list">UserList</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
}

export default Header;