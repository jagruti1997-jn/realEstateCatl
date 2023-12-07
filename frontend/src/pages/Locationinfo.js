import React,{useState,useEffect} from 'react'
import { Link,Outlet } from 'react-router-dom'
export default function Locationinfo() {
  const [inpval,setInpVal]=useState({});
  const setVal= (e)=>{
    
   const {name,value}=e.target;
   setInpVal(()=>{
      return{
          ...inpval,
          [name]:value
      }
   })
   console.log(e.target.value)
  };
  
  //for select values
  const [select,setSelect]=useState({
  City:"pune",
  Area:"parkG",
  Pincode:42315,


  })




  return (
    <div className='container'>
      <form>
      <div className='content'>
      

     
<div className='input-box'>
      <label for="Email" className='details'>Email</label>
      <br />
      <input name='Email' placeholder='Email' value={inpval.Email} onChange={setVal}/>
    </div>

  <div className='input-box'>       
   <label for="City" className='details'>City</label>
  <br />
  <select name="City" placeholder="select City" onChange={(e)=>setSelect({...select,City:e.target.value})}>
    <option value="select City">select City</option>
    <option value="Hyderabad">Hyderabad</option>
    <option value="warangal">warangal</option>
    <option value="Maharastra">Maharastra</option>
    <option value="other">Other</option>
  </select>
  </div>




     
<div className='input-box'>
<label for="Area" className='details'>Area</label>

<select  name="Area" placeholder="select Area"  onChange={(e)=>setSelect({...select,Area:e.target.value})}>
<option value="select Area">select Area</option>
  <option value="Telangana">Telangana</option>
  <option value="Ap">Ap</option>
  <option value="Kolkata">Kolkata</option>
  <option value="other">Other</option>
</select>
</div>

<div className='input-box'>       
 <label for="Pincode" className='details'>Pincode</label>
<br />
<select name="Pincode" placeholder="select Pincode" onChange={(e)=>setSelect({...select,Pincode:e.target.value})} >
  <option value="select Pincode">select Pincode</option>
  <option value="502032">502032</option>
  <option value="506002">506002</option>
  <option value="506001">506001</option>
  <option value="other">Other</option>
</select>
</div>



     
      <div className='input-box'>
            <label for="Address" className='dtails'>Address</label>
            <br />
            <input name='Address' placeholder='Address' value={inpval.Address} onChange={setVal}/>
          </div>
  <div className='input-box'>
            <label for="Landmark" className='details'>Landmark</label>
            <br />
            <input name='Landmark' placeholder='Landmark' value={inpval.Landmark} onChange={setVal}/>
          </div>



     
      <div className='input-box'>
            <label for="Latitude" className='details'>Latitude</label>
            <br />
            <input name='Latitude' placeholder='Latitude' value={inpval.Latitude} onChange={setVal}/>
          </div>
  <div className='input-box'>
            <label for="Longitude" className='details'>Longitude</label>
            <br />
            <input name='Longitude' placeholder='Longitude' value={inpval.Longitude} onChange={setVal} />
          </div>




      </div >
        <Outlet/>
        <div className='button1'>
        <button><Link  to="/generalinfo" style={{color:'whitesmoke'}}>Previous</Link></button>
        <button style={{color:'whitesmoke'}}>Add Property</button>
</div>
 
</form>  
    </div>
  )
}
