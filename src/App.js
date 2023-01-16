import {Routes, Route} from "react-router-dom";
import Login from "./components/login";  
import React from "react";
import Layout from "./components/main";
import Edit from "./components/edit";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login/>}></Route>

        <Route path="/" element={<Layout/>}>
          <Route path="/editPage" element={<Edit/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App