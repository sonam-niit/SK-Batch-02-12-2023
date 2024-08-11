import { useEffect } from "react";

function UseCase3() {
    useEffect(()=>{
        console.log("UseEffect 3 Component is Mounted");
        
        return(()=>{
            console.log("UseEffect 3 is Unmounted");
        })}
    )
    return ( 
        <div>
            <h3>Use Effect Use case 3</h3>
        </div>
     );
}

export default UseCase3;