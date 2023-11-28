import React from 'react'
import { Link,Outlet } from 'react-router-dom'
export default function GeneralInfo() {
  return (
    <div>
      <div style={{  marginLeft: "10px", marginTop: "10px", width: "80%", height: "200px" }}>
        <form>

      <div className='div1'>
            <div style={{ marginTop: "10px", marginLeft: "20px" }}>
              <label for="Name">Name</label>
              <br />
              <select style={{ width: "200px" }} name="name" placeholder="" >
                <option value="Owner">Owner</option>
                <option value="tenent">tenent</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ marginTop: "5px" }}>
              <label for="Mobile">Mobile</label>
              <br />
              <input name='Mobile' placeholder='Enter Mobile Number' />
            </div>
          </div>
          


 <div className='div1'>

     
<div style={{ marginTop: "10px"}}>
<label for="Posted by">Posted by</label>
<br />
<select style={{ width: "200px" }} name="Posted by" placeholder="select Posted by" >
<option value="select Posted by">Posted by</option>
  <option value="amulya">amulya</option>
  <option value="jagruti">jagruti</option>
  <option value="other">Other</option>
</select>
</div>

<div style={{ marginTop: "10px",marginLeft:"20px" }}>       
 <label for="Sale Type">Sale Type</label>
<br />
<select style={{ width: "200px" }} name="Sale Type" placeholder="select Sale Type" >
  <option value="select Sale Type">Please select</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="other">Other</option>
</select>
</div>
</div>



<div className='div1'>

     
<div style={{ marginTop: "10px"}}>
<label for="Featured Package">Featured Package</label>
<br />
<select style={{ width: "200px" }} name="Featured Package" placeholder="select Featured Package" >
<option value="select Featured Package">Please select</option>
  <option value="house">House</option>
  <option value="flat">Flat</option>
  <option value="plot">Plot</option>
  <option value="other">Other</option>
</select>
</div>

<div style={{ marginTop: "10px",marginLeft:"20px" }}>       
 <label for="PPD Package">PPD Package</label>
<br />
<select style={{ width: "200px" }} name="PPD Package" placeholder="select PPD Package" >
  <option value="select PPD Package">Please select</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="other">Other</option>
</select>
</div>
</div>
</form>

      </div>
<Outlet/>
        <Link style={{background:"skyblue",color:"white",border:"1px solid skyblue"}} to="/propertydetails">Previous</Link>
        <Link style={{marginLeft:"20px",borderRadius:"15px", border:"1px solid blue",background:"blue",color:"white"}} to="/locationinfo">Save&Coninue</Link>
   

    </div>
  )
}
