import React ,{useState,useEffect} from 'react'
import {NavLink,Link} from 'react-router-dom'
import './mix.css'
import axios from 'axios'

const Register = () => {
  

   
    const [passShow,setPassShow]=useState(false)
    const [cpassShow,setcPassShow]=useState(false)

    const [inpval,setInpVal]=useState({
        email:"",
        password:"",
        Cpassword:""
    });
 console.log(inpval)
    const setVal= (e)=>{
     const {name,value}=e.target;
     setInpVal(()=>{
        return{
            ...inpval,
            [name]:value
        }
     })
    };

    useEffect(()=>{
      fetchUsers()
    },[])
  
    const fetchUsers=()=>{
       axios
       .get('http://localhost:5000/register')
       .then((res)=>{
        console.log(res.data)
       })
    }

const handleRegister=(event)=>{
    event.preventDefault();
    axios
    .post('http://localhost:5000/register',{})
    .then(()=>{
    
    fetchUsers()
    })
    .catch((error)=>{
      console.log("unable to register user")
    })
}

   
    return(
<>
<section>
    <div className='form_data'>
     <div className='form_heading'>
        <h1>Sign Up</h1>
        <p>Create New Account</p>
     </div>

     <form>
        <div className='form_input'>
           
            <input type='email' value={inpval.email} onChange={setVal} name='email' id='email' placeholder='Mail ID'></input>

        </div>

        <div className='form_input'>
            
            <div className='two'>
            <input type={!cpassShow ?'password':"text"} value={inpval.password} onChange={setVal}  name="password" id='password' placeholder='Password'></input>
            <div className='showpass' onClick={()=>setcPassShow(!cpassShow)}>
                {!cpassShow ? 'show':"hide"}
            </div>
            </div>
        </div>

        <div className='form_input'>
            <div className='two'>
            <input type={!passShow ?'password':"text"} value={inpval.Cpassword} onChange={setVal}  name="Cpassword" id='Cpassword' placeholder='Conform Password'></input>
            <div className='showpass' onClick={()=>setPassShow(!passShow)}>
                {!passShow ? 'show':"hide"}
            </div>
            </div>
            </div>
           
           <Link to="/" className='btn' onClick={handleRegister}>Sign up</Link>.         
           <p><NavLink to='/'>Sign in</NavLink></p>
           
     </form>
    </div>
</section>
</>
    
  )
}

export default Register;
