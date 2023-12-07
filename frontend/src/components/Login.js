import React, { useState } from 'react'
import {NavLink,Link, useParams} from 'react-router-dom'
import "./mix.css"

import { useNavigate } from 'react-router-dom'
const Login = () =>{

    const [passShow,setPassShow]=useState(false)
    let navigateTo=useNavigate();
    const [inpval,setInpVal]=useState({
        email:"",
        password:""
        
    });
    const setVal= (e)=>{
        const {name,value}=e.target;
        setInpVal(()=>{
           return{
               ...inpval,
               [name]:value
           }
        })
       };

const loginUser=(e)=>{
    e.preventDefault()

    const {email, password}=inpval;
    fetch("http://localhost:8000/signin/login", {
        method: "POST",
        body: JSON.stringify(inpval),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }).then((data) => data.json()).then((res) =>  { 

        if(res.status==="success"){
            const token=res.token

            localStorage.setItem('jsonwebtoken',`test ${token}`)
          
            navigateTo(`/home/${encodeURIComponent(res.people)}/${encodeURIComponent(token)}`)
        }else{
            navigateTo("/register")
        }
    })
    if(email === ""){
        alert("please enter your email");
      }else if(!email.includes("@")){
        alert("enter valid email id")
      }else if(password ===""){
        alert("enter your password")
      }else if(password.length <6){
        alert("password must be 6 char")
    }else{
        console.log("user logged succesful")
    }
   

}

const validate=(values)=>{
    
}

    return(
<>
<section className='loginContainer'>
    <div className='form_data'>
     <div className='form_heading'>
        <h1>Logo</h1>
     </div>

     <form onSubmit={loginUser}>
        <div className='form_input'>
           
            <input type='email'name='email'value={inpval.email} onChange={setVal} id='email' placeholder='User ID'></input>

        </div>

        <div className='form_input'>
            
            <div className='two'>
            <input type={!passShow ?'password':"text"} value={inpval.password} onChange={setVal} name="password" id='password' placeholder='Password'></input>
            <div className='showpass' onClick={()=>setPassShow(!passShow)}>
                {!passShow ? 'show':"hide"}
            </div>
            
            </div>
           </div>
           <button className='btn'>
            
            Login</button>
           <button className='btn'><Link to={"/register"}>sign up</Link></button>
           <p>Don't have an Account? <NavLink to='/register'>Sign Up</NavLink></p>
     </form>
    </div>
</section>
</>
    )
}
export default Login;
