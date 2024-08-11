import { useEffect, useState } from "react";

function RealTimeClock() {
    const [time,setTime]= useState(new Date());
    useEffect(
        ()=>{
            const interval=setInterval(()=>{
                setTime(new Date());
            },1000);
            return ()=>clearInterval(interval);
        },[]
    )
    return ( 
        <div>
            <h2>Real time Clock</h2>
            <h3>Current Time: {time.toLocaleTimeString()}</h3>
        </div>
     );
}

export default RealTimeClock;