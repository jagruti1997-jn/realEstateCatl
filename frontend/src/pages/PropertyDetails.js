import React, { useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import "./pages.css"
export default function PropertyDetails() {
  const {people,token}=useParams()

  const[toggle,settoggle]=useState(false)
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
  PropertyType: "house",
     Negotable:"1" ,
     Ownership:"select Ownership",
     PropertyAge:"select Property Age",
     PropertyApproved:"select Property Approved",
     BankLoan:"select Bank Loan"
})
  return (
    <div className='container'>
      
        <form>
          <div className='content'>

            <div className='input-box'>
              <label className='details'>Length</label>
              <br />
              <input name='Length' placeholder='Example:1000' value={inpval.Length} onChange={setVal} />
            </div>
            <div className='input-box'>
              <label className='details'>Breadth</label>
              <br />
              <input name='Breadth' placeholder='Example:1000' value={inpval.Breadth} onChange={setVal}/>
            </div>
          

          


            <div className='input-box'>
              <label for="details">Total Area</label>
              <br />
              <input name='TotalArea' placeholder='Example:7500' value={inpval.TotalArea} onChange={setVal} />
            </div>

            <div className='input-box'>
              <label className='details'>Area Unit</label>
              <br />
              <select  name="AreaUnit" placeholder="select Area Unit" value={select} onChange={(e)=>setSelect({...select,AreaUnit:e.target.value})} >
                <option value="select Area Unit">select Area Unit</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="other">Other</option>
              </select>
            </div>
          


          


            <div className='input-box'>
              <label for="No of BHK" className='details'>No of BHK</label>
              <br />
              <select name="NoofBHK" placeholder="select No of BHK" onChange={(e)=>setSelect({...select,NoofBHK:e.target.value})}>
                <option value="select No of BHK">select No of BHK</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className='input-box'>
              <label for="No of Floor" className='details'>No of Floor</label>
              <br />
              <select  name="Nooffloor" placeholder="select No of Floor" onChange={(e)=>setSelect({...select,Nooffloor:e.target.value})} >
                <option value="select No of Floor">select No of Floor</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="other">Other</option>
              </select>
            </div>
          

          


            <div className='input-box'>
              <label for="Attached" className='details'>Attached</label>
              <br />
              <select  name="Attached" placeholder="select Attached" onChange={(e)=>setSelect({...select,Attached:e.target.value})}>
                <option value="select Attached">select Attached</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className='input-box'>
              <label for="WesternToilet" className='details'>Western Toilet</label>
              <br />
              <select  name="WesternToilet" placeholder="select Western Toilet" onChange={(e)=>setSelect({...select,WesternToilet:e.target.value})} >
                <option value="select Western Toilet">select Western Toilet</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="other">Other</option>
              </select>
            </div>
          

          


            <div className='input-box'>
              <label for="Furnished" className='details'>Furnished</label>
              <br />
              <select  name="Furnished" placeholder="select Furnished" onChange={(e)=>setSelect({...select,Furnished:e.target.value})}>
                <option value="select Furnished">select Furnished</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className='input-box'>
              <label for="CarParking" className='details'>Car Parking</label>
              <br />
              <select  name="CarParking" placeholder="select Car Parking" onChange={(e)=>setSelect({...select,CarParking:e.target.value})} >
                <option value="select Car Parking">select Car Parking</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="other">Other</option>
              </select>
            </div>
          
          
            <div className='input-box'>
              <label for="Lift" className='details'>Lift</label>
              <br />
              <select  name="Lift" placeholder="select Lift" onChange={(e)=>setSelect({...select,Lift:e.target.value})}>
                <option value="select Lift">select Lift</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className='input-box'>
              <label for="Electricity" className='details'>Electricity</label>
              <br />
              <input name='Electricity' placeholder='Example:3phase' value={inpval.Electricity} onChange={setVal} />
            </div>
         
       
            <div className='input-box'>
              <label for="Facing" className='details'>Facing</label>
              <br />
              <select name="Facing" placeholder="select Facing" onChange={(e)=>setSelect({...select,Facing:e.target.value})}>
                <option value="select Facing">select Facing</option>
                <option value="north">north</option>
                <option value="south">south</option>
                <option value="east">east</option>
                <option value="west">west</option>

                <option value="other">Other</option>
              </select>
            </div>
      
      
            </div>
</form>

<Outlet />
      <div className='button1'>
      
      <button><Link  to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}`} style={{color:'whitesmoke'}}>Previous</Link></button>
      <button><Link  to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/generalinfo`} style={{color:'whitesmoke'}}>Save&Coninue</Link></button>
      </div>

    </div>
  )
}
