import { BrowserRouter, Routes,Route } from "react-router-dom"
import Header from "./components/header"
import Home from "./components/home"
import Login from "./components/Login"
import Register from "./components/Register"
import UserList from "./components/userslist"
import UserDetails from "./components/UserDetails"
import Dashboard from "./components/dashboard"
import { useState } from "react"

function App() {

  const [loggedIn,setLoggedIn]=useState(false);
  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="login" element={<Login setLoggedIn={setLoggedIn}/>}/>
        <Route path="register" element={<Register />}/>
        <Route path="list" element={<UserList />}/>
        <Route path="details/:id" element={<UserDetails />}/>
        <Route path="dashboard" element={<Dashboard />}/>
      </Routes>
      {/* Add Footer Here */}
    </BrowserRouter>
  )
}

export default App
