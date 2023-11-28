import React, { useState } from 'react'
import {NavLink,Link} from 'react-router-dom'
import "./mix.css"
const Login = () =>{

    const [passShow,setPassShow]=useState(false)


    const [inpval,setInpVal]=useState({
        email:"",
        password:"",
        
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

    if(email === ""){
        alert("please enter your email");
      }else if(!email.includes("@")){
        alert("enter valid email id")
      }else if(password ===""){
        alert("enter your password")
      }else if(password.length <6){
        alert("password must be 6 char")
    }else{
        console.log("user register succesful")
    }

}

    return(
<>
<section>
    <div className='form_data'>
     <div className='form_heading'>
        <h1>Logo</h1>
     </div>

     <form>
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
           <button className='btn' onClick={loginUser}>
            
            Login</button>
           <Link to="/register" className='btn' >Sign up</Link>
           <p>Don't have an Account? <NavLink to='/register'>Sign Up</NavLink></p>
     </form>
    </div>
</section>
</>
    )
}
export default Login;
