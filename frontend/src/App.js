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
    {/* <Routes>

   
    <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes> */}


      
    <BrowserRouter>
    <SideBar>
     <Routes>
    
            <Route path="/property" element={<Property/>}/>

              <Route path='/' element={<NewPage/>}>
                 <Route path='' element={<BasicInfo/>} />
                 <Route path='propertydetails' element={<PropertyDetails/>} />
                 <Route path='generalinfo' element={<GeneralInfo/>} />
                 <Route path='locationinfo' element={<Locationinfo/>} />
              </Route>
            <Route path="/assistance" element={<Assistance/>}/>
            <Route path="/recievedinterest" element={<RecievedInterest/>}/>
            <Route path="/sentinterest" element={<SentInterest/>}/>
            <Route path="/propertyviews" element={<PropertyViews/>}/>
            <Route path="/tariffplan" element={<TariffPlan/>}/>
            <Route path='/newpage' element={<NewPage/>}/>

           
        </Routes>
        </SideBar>
  </BrowserRouter> 
  
    </>
  );
}

export default App;
