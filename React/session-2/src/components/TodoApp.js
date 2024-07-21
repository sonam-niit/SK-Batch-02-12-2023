import { useState } from "react";

function TodoApp() {
    const [input, setInput] = useState();
    const [todos, setTodos] = useState([]);
    const handleClick = () => {
        setTodos([...todos, { id: Date.now(), name: input,completed:false }]); //to update the state
    }
    const handleDelete = (id) => {
        setTodos(todos.filter(item => item.id != id));
    }
    const handleComplete=(id)=>{
        const foundIndex=todos.find(item=>item.id==id);
        const found=todos.find(item=>item.id==id);
        found.completed=true;
        // todos.splice(foundIndex,1);
        // setTodos([...todos,found]);
    }
    return (
        <>
            <h3>Todo App</h3><hr />
            <input type="text" placeholder="Enter your Todo"
                onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleClick}>Add Todo</button>

            <br /><br />
            <h3>Todo List</h3>
            <ul>
                {
                    todos.map(item => (
                        <li key={item.id} onClick={()=>handleComplete(item.id)}>{item.id}- {item.name}
                        --{item.completed?'completed':'pending'}
                        <button onClick={()=>handleDelete(item.id)}>X</button>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default TodoApp;