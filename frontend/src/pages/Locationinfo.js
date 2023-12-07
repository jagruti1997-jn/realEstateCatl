import React from 'react'
import { Link,Outlet, useParams } from 'react-router-dom'
export default function Locationinfo() {
  const{people,token}=useParams()
  return (
    <div className='container'>
      <form>
      <div className='content'>
      

     
<div className='input-box'>
      <label for="Email" className='details'>Email</label>
      <br />
      <input name='Email' placeholder='Email' />
    </div>

  <div className='input-box'>       
   <label for="City" className='details'>City</label>
  <br />
  <select name="City" placeholder="select City" >
    <option value="select City">select City</option>
    <option value="Hyderabad">Hyderabad</option>
    <option value="warangal">warangal</option>
    <option value="Maharastra">Maharastra</option>
    <option value="other">Other</option>
  </select>
  </div>




     
<div className='input-box'>
<label for="Area" className='details'>Area</label>

<select  name="Area" placeholder="select Area" >
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
<select name="Pincode" placeholder="select Pincode" >
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
            <input name='Address' placeholder='Address' />
          </div>
  <div className='input-box'>
            <label for="Landmark" className='details'>Landmark</label>
            <br />
            <input name='Landmark' placeholder='Landmark' />
          </div>



     
      <div className='input-box'>
            <label for="Latitude" className='details'>Latitude</label>
            <br />
            <input name='Latitude' placeholder='Latitude' />
          </div>
  <div className='input-box'>
            <label for="Longitude" className='details'>Longitude</label>
            <br />
            <input name='Longitude' placeholder='Longitude' />
          </div>




      </div >
        <Outlet/>
        <div className='button1'>
        <button><Link  to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/generalinfo`} style={{color:'whitesmoke'}}>Previous</Link></button>
        <button style={{color:'whitesmoke'}}>Add Property</button>
</div>
 
</form>  
    </div>
  )
}
