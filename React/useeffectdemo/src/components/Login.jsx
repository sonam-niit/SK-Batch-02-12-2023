import { useContext } from "react";
import { LoginContext } from "./logincontext";

function Login() {
    const {login}=useContext(LoginContext);
    return ( 
        <div>
            <h3>Login Component</h3>
            <button onClick={login}>Login</button>
        </div>
     );
}

export default Login;