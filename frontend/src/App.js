import React from "react";
import './App.css'

import Login from "./components/Login"
import Register from "./components/Register";
import Home from "./components/Home"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
  </Routes>
    </BrowserRouter>
   
  {/* <AppRoutes/> */}
    </>
  );
}

export default App;
