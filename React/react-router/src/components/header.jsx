import { Link, useNavigate } from "react-router-dom";

function Header({ loggedIn, setLoggedIn }) {
    const navigate=useNavigate();
    const logout=()=>{
        setLoggedIn(false);
        navigate('/login');
    }
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
                        {
                            loggedIn ?
                                <li className="nav-item">
                                    <button className="nav-link" onClick={logout}>logout</button>
                                </li>
                                : <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="register">Register</Link>
                                    </li>
                                </>
                        }
                        
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Header;