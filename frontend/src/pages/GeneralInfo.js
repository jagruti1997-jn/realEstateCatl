import React, { useState } from 'react'
import { Link,Outlet } from 'react-router-dom'
export default function GeneralInfo() {
  //for input values
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
    name:"building",
    Postedby:"alex",
    SaleType:"1",
    FeaturedPackage:"house",
    PPDPackage:"4"

  })







  return (
    <div className='container'>
      
        <form>
          <div className='content'>

      
            <div className='input-box'>
              <label for="Name" className='details'>Name</label>
              <br />
              <select  name="name" placeholder="" onChange={(e)=>setSelect({...select,name:e.target.value})} >
                <option value="Owner">Owner</option>
                <option value="tenent">tenent</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className='input-box'>
              <label for="Mobile" className='details'>Mobile</label>
              <br />
              <input name='Mobile' placeholder='Enter Mobile Number' value={inpval.Mobile} onChange={setVal} />
            </div>
     

     
<div className='input-box'>
<label for="Posted by" className='details'>Posted by</label>
<br />
<select name="Postedby" placeholder="select Posted by" onChange={(e)=>setSelect({...select,Postedby:e.target.value})}>
<option value="select Posted by">Posted by</option>
  <option value="amulya">amulya</option>
  <option value="jagruti">jagruti</option>
  <option value="other">Other</option>
</select>
</div>

<div className='input-box'>       
 <label for="Sale Type" className='details'>Sale Type</label>

<select  name="SaleType" placeholder="select Sale Type" onChange={(e)=>setSelect({...select,SaleType:e.target.value})}>
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
<select  name="FeaturedPackage" placeholder="select Featured Package" >
<option value="select Featured Package" onChange={(e)=>setSelect({...select,FeaturedPackage:e.target.value})}>Please select</option>
  <option value="house">House</option>
  <option value="flat">Flat</option>
  <option value="plot">Plot</option>
  <option value="other">Other</option>
</select>
</div>

<div className='input-box'>       
 <label for="PPD Package" className='details'>PPD Package</label>
<br />
<select  name="PPDPackage" placeholder="select PPD Package" onChange={(e)=>setSelect({...select,PPDPackage:e.target.value})}>
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
