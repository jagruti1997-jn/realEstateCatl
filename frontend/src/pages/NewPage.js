import React ,{useEffect}from "react";
import {Link,NavLink,Outlet, useParams,useNavigate} from 'react-router-dom';
import "./pages.css"
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';


const NewPage=()=>{
   const navigate=useNavigate()
    const{people,token,postsID}=useParams()
   localStorage.setItem('token',token)

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    },[])


    return (
        <div >
         <h6 style={{marginTop:"20px",marginLeft:"20px"}}>USER ID:{people}</h6>
       
<h2 style={{marginTop:"40px",fontStyle:"normal",color:"lightblue"}}>ADD NEW PROPERTY</h2>

 <nav className='navigationbar'>
<ul >
    <li><NavLink to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}`}>basic Info</NavLink> </li>
    <li><NavLink  to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/${encodeURIComponent(postsID)}/propertyDetails`}>Property Details</NavLink></li>
    <li><NavLink  to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/${encodeURIComponent(postsID)}/generalInfo`}>General Info</NavLink></li>
    <li><NavLink  to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/${encodeURIComponent(postsID)}/locationinfo`}>Location Info</NavLink></li>
    
</ul>
</nav>
<Outlet/>
   </div>
    )
}
export default NewPage;