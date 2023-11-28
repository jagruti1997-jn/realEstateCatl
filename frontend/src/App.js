import React from "react";
import Login from "./components/Login"
import Register from "./components/Register";
import Home from "./components/Home"
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  
    </>
  );
}

export default App;
