import React from "react";
import {Link,NavLink,Outlet} from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';


const NewPage=()=>{
    return (
        <div >
<h2 style={{marginTop:"60px",fontStyle:"normal",color:"lightblue"}}>ADD NEW PROPERTY</h2>

 <nav className='navigationbar' style={{background:"#EBECF0",height:"40px",width:"75%",marginLeft:"50px"}} >
<ul >
    <li ><NavLink to="/">basic Info</NavLink> </li>
    <li><NavLink  to="/propertydetails">Property Details</NavLink></li>
    <li><NavLink  to="/generalinfo">General Info</NavLink></li>
    <li><NavLink  to="/locationinfo">Location Info</NavLink></li>

</ul>
</nav>
<Outlet/>
   </div>
    )
}
export default NewPage;