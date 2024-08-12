import { useState } from "react";
import { createContext } from "react";

export const LoginContext= createContext();

export const LoginProvider=({children})=>{

    const [loggedIn,setLoggedIn]=useState(false);
    const login=()=>{
        setLoggedIn(true);
    }
    const logout=()=>{
        setLoggedIn(false);
    }
    return(
        <LoginContext.Provider value={{loggedIn,login,logout}}>
            {children}
        </LoginContext.Provider>
    )
}