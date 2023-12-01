import React from "react";
import './App.css'

import Login from "./components/Login"
import Register from "./components/Register";
import Home from "./components/Home"
import PropertyDetails from "./pages/PropertyDetails";
import BasicInfo from "./pages/BasicInfo";
import GeneralInfo from "./pages/GeneralInfo";
import Locationinfo from "./pages/Locationinfo";
import SideBar from "./components/SideBar";
import NewPage from "./pages/NewPage";
import Assistance from "./pages/Assistance";
import SentInterest from "./pages/SentInterest";
import Property from "./pages/Property";
import PropertyViews from "./pages/PropertyViews";
import TariffPlan from "./pages/TariffPlan";
import RecievedInterest from "./pages/RecievedInterest";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

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
