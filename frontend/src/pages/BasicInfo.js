import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import PropertyDetails from './PropertyDetails'
import "./pages.css"
export default function BasicInfo() {
  return (
    
<div className='container'>
   <form >
<div className='content'>
 <div className="input-box">
   <label className="details">Property Type</label>
   
 <select  name="Property Type" placeholder="select Property Type" >
    <option value="house">House</option>
    <option value="flat">Flat</option>
     <option value="plot">Plot</option>
     <option value="other">Other</option>
   </select>
   </div>

   <div className="input-box">       
    <label className="details">Negotable</label>
   
   <select name="Negotable" placeholder="select Negotable" >
    <option value="select Negotable">select Negotable</option>
    <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="other">Other</option>
   </select>
   </div>
 

 


<div className='input-box'>
<label className='details'>Price</label>

<input name='Price' placeholder='Example:10000'/>
 </div>

<div className='input-box' >       
<label className='details'>Ownership</label>
<br />
<select  name="Ownership" placeholder="select Ownership" >
<option value="select Ownership">select Ownership</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="other">Other</option>
</select>
 </div>




 <div className='input-box'>
 <label className='details'>Property Age</label>

 <select  name="Property Age" placeholder="select Property Age" >
 <option value="select Property Age"></option>

 <option value="house">House</option>
 <option value="flat">Flat</option>
 <option value="plot">Plot</option>
  <option value="other">Other</option>
</select>
</div>

<div className='input-box'>       
<label className='details'>Property Approved</label>

 <select  name="Property Approved" placeholder="select Property Approved" >
<option value="select Property Approved">select Property Approved</option>
<option value="1">1</option>
 <option value="2">2</option>
<option value="3">3</option>
 <option value="other">Other</option>
 </select>
 </div>



<div className='input-box'>
<label className='details'> Property Description</label>

 <input name='Description' placeholder=''/>
 </div>

 <div className='input-box'>       
 <label classNmae="details">Bank Loan</label>

 <select  name="Bank Loan" placeholder="select Bank Loan" >
 <option value="select Bank Loan">Bank Loan</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="other">Other</option>
</select>
</div>
</div> 
 </form>
 <Outlet />

<div className='button1'>

 <button style={{color:'whitesmoke'}}>Cancel</button>
 <button><Link to="/propertydetails" style={{color:'whitesmoke'}} >Save&Coninue</Link></button>
 </div>
 

        
      </div>
    



  )
}








