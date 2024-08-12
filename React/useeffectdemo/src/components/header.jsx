import { useContext } from "react";
import { LoginContext } from "./logincontext";

function Header() {
    const { loggedIn,logout } = useContext(LoginContext);
    return (
        <div>
            {
                !loggedIn ? <>
                    <button>Login</button>
                    <button>Register</button>
                </> : <button onClick={logout}>Logout</button>
            }

        </div>
    );
}

export default Header;