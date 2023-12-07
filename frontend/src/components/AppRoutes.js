import React from 'react'

import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import '../App.css'

import SideBar from './SideBar';
import Property from '../pages/Property'
import Assistance from '../pages/Assistance';
import RecievedInterest from '../pages/RecievedInterest';
import SentInterest from '../pages/SentInterest';
import PropertyViews from '../pages/PropertyViews';
import TariffPlan from '../pages/TariffPlan';
import NewPage from '../pages/NewPage';
import BasicInfo from '../pages/BasicInfo';
import PropertyDetails from '../pages/PropertyDetails';
import GeneralInfo from '../pages/GeneralInfo';
import Locationinfo from '../pages/Locationinfo';

export default function AppRoutes() {
  return (
    <div>


<BrowserRouter>
    <SideBar>
     <Routes>
            <Route path="/Property" element={<Property/>}/>

              <Route path='/' element={<NewPage/>}>
                 <Route path='/' element={<BasicInfo/>} />
                 <Route path='propertydetails' element={<PropertyDetails/>} />
                 <Route path='generalinfo' element={<GeneralInfo/>} />
                 <Route path='locationinfo' element={<Locationinfo/>} />
              </Route>
            <Route path="/assistance" element={<Assistance/>}/>
            <Route path="/recievedinterest" element={<RecievedInterest/>}/>
            <Route path="/sentinterest" element={<SentInterest/>}/>
            <Route path="/propertyviews" element={<PropertyViews/>}/>
            <Route path="/tariffplan" element={<TariffPlan/>}/>

           
        </Routes>
        </SideBar>
  </BrowserRouter>
    </div>
  )
}

