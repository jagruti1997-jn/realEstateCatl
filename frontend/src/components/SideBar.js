import React, { Children, useEffect, useState } from "react";

import { RiHome2Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { PiDownloadSimpleFill } from "react-icons/pi";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { RxEyeOpen } from "react-icons/rx";
import { LuTag } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

import { NavLink, useParams ,Outlet,useNavigate,useLocation, Link} from "react-router-dom";
const SideBar=({children})=>{
    const {people,token}=useParams()
    const [IsOpen,setIsOpen]=useState(true)
    const [peopleList, setPeopleList] = useState([])

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
    useEffect(() => {
        fetch("http://localhost:8000/posts/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization":`test ${token}`
            }
        }).then((response) => response.json()).then((value) => setPeopleList(value.posts))

    }, [])
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
                <h6>USER ID:{people}</h6>
            <input type="text" placeholder="Search PPD ID" name="search" className="search" style={{marginLeft:"20%",marginTop:"30%",width:"50%"}}/>
            {/* <button style={{width:"30px",height:"30px",marginLeft:"-40px",border:"none",background:"white"}}><IoIosSearch/></button> */}
           
            </div>
            <div style={{float:"right",marginTop:"50px",marginLeft:"50%"}}>
                <button className="Addpropertybutton" >
                   
                    <Link style={{textDecoration:"none"}} to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}`}>+ Add Property
           </Link> 
                    
              </button>
             <div>

            

              {
                <table border="1" style={{ border: "1px solid pink", marginTop: "40px", marginLeft: "-75%", width: "80vw" }}>
                    {peopleList.map((val, key) => {
                        return <tr key={key}>
                          <td >{val.PropertyType}</td>
                          <td>{val.Negotable}</td>
                          <td>{val.Price}</td>
                          <td>{val.PropertyDescription}</td>

                            {/* <td>{val.PPDPackage}</td> */}
                            <td>{val.Area}</td>
                            <td>{val.Pincode}</td>
                            
                            <td><button style={{ backgroundColor: "darkcyan" }}>eye</button></td>
                            <td><button style={{ backgroundColor: "darkcyan" }}>edit</button></td>


                        </tr>

                    })
                    }
                </table>
            }
             </div>

              </div>
            <Outlet/>
        </div>
    )
}
export default SideBar;