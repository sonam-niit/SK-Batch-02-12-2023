import { useEffect, useState } from "react"
function UseCase1() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    //execute only once
    useEffect(() => {
        console.log("App Component rendered");
    }, [])
    //This side effects run only when the count change
    useEffect(() => {
        console.log("Count updated", count);
    }, [count])
    //This side effects run only when the name change
    useEffect(() => {
        console.log("name updated", name);
    }, [name])
    return (
        <div>
            <h1>UseCase1 Component:{count} {name}</h1>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default UseCase1;