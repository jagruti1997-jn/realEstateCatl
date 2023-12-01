import React from 'react'
import { Link,Outlet } from 'react-router-dom'
export default function GeneralInfo() {
  return (
    <div className='container'>
      
        <form>
          <div className='content'>

      
            <div className='input-box'>
              <label for="Name" className='details'>Name</label>
              <br />
              <select  name="name" placeholder="" >
                <option value="Owner">Owner</option>
                <option value="tenent">tenent</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className='input-box'>
              <label for="Mobile" className='details'>Mobile</label>
              <br />
              <input name='Mobile' placeholder='Enter Mobile Number' />
            </div>
     

     
<div className='input-box'>
<label for="Posted by" className='details'>Posted by</label>
<br />
<select name="Posted by" placeholder="select Posted by" >
<option value="select Posted by">Posted by</option>
  <option value="amulya">amulya</option>
  <option value="jagruti">jagruti</option>
  <option value="other">Other</option>
</select>
</div>

<div className='input-box'>       
 <label for="Sale Type" className='details'>Sale Type</label>

<select  name="Sale Type" placeholder="select Sale Type" >
  <option value="select Sale Type">Please select</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="other">Other</option>
</select>
</div>






     
<div className='input-box'>
<label for="Featured Package" className='details'>Featured Package</label>
<br />
<select  name="Featured Package" placeholder="select Featured Package" >
<option value="select Featured Package">Please select</option>
  <option value="house">House</option>
  <option value="flat">Flat</option>
  <option value="plot">Plot</option>
  <option value="other">Other</option>
</select>
</div>

<div className='input-box'>       
 <label for="PPD Package" className='details'>PPD Package</label>
<br />
<select  name="PPD Package" placeholder="select PPD Package" >
  <option value="select PPD Package">Please select</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="other">Other</option>
</select>
</div>


</div>
</form>
   
<Outlet/>
<div className='button1'> 
   <button>  <Link  to="/propertydetails" style={{color:'whitesmoke'}}>Previous</Link></button>
    <button>   <Link  to="/locationinfo" style={{color:'whitesmoke'}}>Save&Coninue</Link></button>   </div>
 
    </div>
  )
}
