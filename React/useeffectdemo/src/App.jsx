import { useState } from "react"
import UseCase1 from "./components/UseCase1"
import UseCase2 from "./components/UseCase2"
import UseCase3 from "./components/UseCase3";
import RealTimeClock from "./components/Timer";

function App() {

  const [flag,setFlag]=useState(false);
  return(
    <div className="container">
      <RealTimeClock />
      <button onClick={()=>setFlag(!flag)}>
        {false?'Hide Comp':'Show Comp'}
        </button>
      {
        flag? <UseCase3 /> : ''
      }
    </div>
  )
}

export default App
