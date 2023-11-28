import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import PropertyDetails from './PropertyDetails'
export default function BasicInfo() {
  return (
    <div >
      <form>

      <div className='div1'>

     
        <div style={{ marginTop: "10px"}}>
        <label for="Property Type">Property Type</label>
        <br />
        <select style={{ width: "200px" }} name="Property Type" placeholder="select Property Type" >
          <option value="house">House</option>
          <option value="flat">Flat</option>
          <option value="plot">Plot</option>
          <option value="other">Other</option>
        </select>
        </div>

        <div style={{ marginTop: "10px",marginLeft:"20px" }}>       
         <label for="Negotable">Negotable</label>
        <br />
        <select style={{ width: "200px" }} name="Negotable" placeholder="select Negotable" >
          <option value="select Negotable">select Negotable</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="other">Other</option>
        </select>
        </div>
      </div>

      <div className='div2' >

     
<div style={{ marginTop: "5px"}}>
<label for="Price">Price</label>
<br/>
<input name='Price' placeholder='Example:10000'/>
</div>

<div style={{ marginTop: "5px",marginLeft:"20px" }}>       
 <label for="Ownership">Ownership</label>
<br />
<select style={{ width: "200px" }} name="Ownership" placeholder="select Ownership" >
  <option value="select Ownership">select Ownership</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="other">Other</option>
</select>
</div>
</div>
<div className='div3'>

     
<div style={{ marginTop: "10px"}}>
<label for="Property Age">Property Age</label>
<br />
<select style={{ width: "200px" }} name="Property Age" placeholder="select Property Age" >
<option value="select Property Age"></option>

  <option value="house">House</option>
  <option value="flat">Flat</option>
  <option value="plot">Plot</option>
  <option value="other">Other</option>
</select>
</div>

<div style={{ marginTop: "10px",marginLeft:"20px" }}>       
 <label for="Property Approved">Property Approved</label>
<br />
<select style={{ width: "200px" }} name="Property Approved" placeholder="select Property Approved" >
  <option value="select Property Approved">select Property Approved</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="other">Other</option>
</select>
</div>
</div>

<div className='div4' >


<div style={{ marginTop: "5px"}}>
<label for="Description">Description</label>
<br/>
<input name='Description' placeholder=''/>
</div>

<div style={{ marginTop: "5px",marginLeft:"20px" }}>       
<label for="Bank Loan">Bank Loan</label>
<br />
<select style={{ width: "200px" }} name="Bank Loan" placeholder="select Bank Loan" >
<option value="select Bank Loan">Bank Loan</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="other">Other</option>
</select>
</div>
</div>

      <Outlet />

<div style={{marginTop:"30px", marginLeft:"30%"}}>
  
      <button style={{ background: "skyblue", color: "white", border: "1px solid skyblue" }}>Cancel</button>
      <Link style={{ marginLeft: "20px", borderRadius: "15px", border: "1px solid blue", background: "blue", color: "white" }} to="/propertydetails">Save&Coninue</Link>
      </div>
      </form>

</div>


  )
}
