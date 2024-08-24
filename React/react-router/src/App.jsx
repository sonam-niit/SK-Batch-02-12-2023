import { BrowserRouter, Routes,Route } from "react-router-dom"
import Header from "./components/header"
import Home from "./components/home"
import Login from "./components/Login"
import Register from "./components/Register"

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />}/>
      </Routes>
      {/* Add Footer Here */}
    </BrowserRouter>
  )
}

export default App
