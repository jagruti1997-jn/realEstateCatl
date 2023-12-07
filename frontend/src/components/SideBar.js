import React, { Children, useState } from "react";

import { RiHome2Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { PiDownloadSimpleFill } from "react-icons/pi";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { RxEyeOpen } from "react-icons/rx";
import { LuTag } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

import { NavLink, useParams ,Outlet, Link} from "react-router-dom";
const SideBar=({children})=>{
    const {people,token}=useParams()
    const [IsOpen,setIsOpen]=useState(true)
    const Toggle=()=>setIsOpen(!IsOpen)
 
        
    const menuItem=[
        {
            path:"/home/:people/:token",
            name: "Property",
            icon :<RiHome2Line />
        }, {
            path:"/assistance",
            name: "Assistance",
            icon :<FaRegBell />
        }, {
            path:"/recievedinterest",
            name: "Recieved Interest",
            icon :<PiDownloadSimpleFill />

        }, {
            path:"/sentinterest",
            name: "Sent Interest",
            icon :<BiSolidUpArrowCircle /> 
        },
        {
            path:"/propertyviews",
            name: "Property Views",
            icon :<RxEyeOpen />
        },
        {
            path:"/tariffplan",
            name: "Tariff Plan",
            icon :<LuTag />
        },
    ]
    return (
        <div className="container1">
            <div style={{width: IsOpen ? "200px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: IsOpen ? "block" : "none"}} className="logo">Logo</h1>
                    <div style={{marginLeft: IsOpen ? "60px" : "0px"}}className="bars">
                        <FaBars onClick={Toggle}/>
                    </div>

                </div>
                {
                    menuItem.map((item,index)=>( 
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon">{item.icon} </div>
                            <div style={{display: IsOpen ? "block" : "none"}} className="link_text">{item.name} </div>


                        </NavLink>


                    ))
                }
            </div>


            <div>
            <input type="text" placeholder="Search PPD ID" name="search" className="search" style={{marginLeft:"90%",marginTop:"50%"}}/>
            {/* <button style={{width:"30px",height:"30px",marginLeft:"-40px",border:"none",background:"white"}}><IoIosSearch/></button> */}
           
            </div>
            <div style={{float:"right",marginTop:"0px",marginLeft:"50%"}}>
                <button className="Addpropertybutton" >
                   
                    <Link style={{textDecoration:"none"}} to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}`}>+ Add Property
           </Link> 
                    
              </button>
              </div>
            <Outlet/>
        </div>
    )
}
export default SideBar;