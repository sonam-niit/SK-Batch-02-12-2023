import logo from './logo.svg';
import './App.css';
import Greetings from './components/greetings';
import Display from './components/display';
import { useState } from 'react';
import Form from './components/form';
import Button from './components/button';

function App() {

  const [data,setData]=useState([]);
  const addData=(obj)=>{
    setData([...data,obj])
  }
  return (
    <div className="App">
        <Button label="Home"></Button>
        <Button label="Login"></Button>
        <Button label="Register"></Button>
        <Button label="News"></Button>
        {
          data.map(item=>(<div>{item.name}, 
          {item.age}</div>))
        }
        <Form addData={addData} />

{/* const users=[
    {name:'alex',email:'alex@gmail.com',country:'india'},
    {name:'bob',email:'bob@gmail.com',country:'US'},
    {name:'catty',email:'catty@gmail.com',country:'UK'},
  ] */}
        {/* {
          users.map(user=>(
            <Display user={user} />
            //passing props as object to display comp
          ))
        } */}

      {/* <Greetings name="sonam"  message="hello"/>
      <Greetings name="alex"message="Welcome to Props" /> */}
    </div>
  );
}

export default App;
