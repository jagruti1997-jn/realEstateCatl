import React from 'react'
import { Link,Outlet } from 'react-router-dom'
export default function Locationinfo() {
  return (
    <div>
      <div style={{ marginLeft: "10px", marginTop: "10px", width: "80%", height: "220px" }}>
      <div className='div1'>

     
<div style={{ marginTop: "5px" }}>
      <label for="Email">Email</label>
      <br />
      <input name='Email' placeholder='Email' />
    </div>

  <div style={{ marginTop: "10px",marginLeft:"20px" }}>       
   <label for="City">City</label>
  <br />
  <select style={{ width: "200px" }} name="City" placeholder="select City" >
    <option value="select City">select City</option>
    <option value="Hyderabad">Hyderabad</option>
    <option value="warangal">warangal</option>
    <option value="Maharastra">Maharastra</option>
    <option value="other">Other</option>
  </select>
  </div>
</div>

<div className='div1'>

     
<div style={{ marginTop: "10px"}}>
<label for="Area">Area</label>
<br />
<select style={{ width: "200px" }} name="Area" placeholder="select Area" >
<option value="select Area">select Area</option>
  <option value="Telangana">Telangana</option>
  <option value="Ap">Ap</option>
  <option value="Kolkata">Kolkata</option>
  <option value="other">Other</option>
</select>
</div>

<div style={{ marginTop: "10px",marginLeft:"20px" }}>       
 <label for="Pincode">Pincode</label>
<br />
<select style={{ width: "200px" }} name="Pincode" placeholder="select Pincode" >
  <option value="select Pincode">select Pincode</option>
  <option value="502032">502032</option>
  <option value="506002">506002</option>
  <option value="506001">506001</option>
  <option value="other">Other</option>
</select>
</div>
</div>
<div className='div1'>

     
      <div style={{ marginTop: "5px" }}>
            <label for="Address">Address</label>
            <br />
            <input name='Address' placeholder='Address' />
          </div>
  <div style={{ marginTop: "5px" }}>
            <label for="Landmark">Landmark</label>
            <br />
            <input name='Landmark' placeholder='Landmark' />
          </div>

</div>
<div className='div1'>

     
      <div style={{ marginTop: "5px" }}>
            <label for="Latitude">Latitude</label>
            <br />
            <input name='Latitude' placeholder='Latitude' />
          </div>
  <div style={{ marginTop: "5px" }}>
            <label for="Longitude">Longitude</label>
            <br />
            <input name='Longitude' placeholder='Longitude' />
          </div>

</div>


      </div>
        <Outlet/>
        <Link style={{background:"skyblue",color:"white",border:"1px solid skyblue"}} to="/generalinfo">Previous</Link>
<button>Add Property</button>   
    </div>
  )
}
