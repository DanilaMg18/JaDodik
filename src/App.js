import {Routes, Route, useNavigate, Navigate} from "react-router-dom";
import Login from "./components/login";  
import React from "react";
import Layout from "./components/main";

function App(props) {

  const Navigate = useNavigate()
  const PageSwitcher = () => {Navigate('/')}

  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login switchPage={PageSwitcher()}/>}></Route>
        <Route path="/" element={<Layout/>}></Route>
      </Routes>
    </div>
  )
}

export default App