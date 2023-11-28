import React from "react";
import {Link,NavLink,Outlet} from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import NewPage from "./NewPage";
import { useNavigate } from "react-router";
const Property=()=>{
    return (
        <div >

            <div>
            <input type="text" placeholder="Search PPD ID" name="search" className="search"/>
            <button style={{width:"30px",height:"30px",marginLeft:"-40px",border:"none",background:"white"}}><IoIosSearch  /></button>
           
            </div>
            <div style={{float:"right",marginTop:"-30px"}}>
                <button className="Addpropertybutton">
                   
                    <Link style={{textDecoration:"none"}} to={'/'}>+ Add Property
           </Link> 
                    
              </button> 
            {/* <Outlet/> */}
         </div>
        
       
         
        </div>
        
    )
}
export default Property;