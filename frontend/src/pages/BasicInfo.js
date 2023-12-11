import React,{useState} from 'react'
import { Outlet ,useParams} from 'react-router'
import { Link } from 'react-router-dom'
import PropertyDetails from './PropertyDetails'
import "./pages.css"
export default function BasicInfo() {
 // for input values
 const {people,token}=useParams()

 const[toggle,settoggle]=useState(false)
const [inpval,setInpVal]=useState({
  Price:"",
  PropartyDetails:"",
  user:""
});
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
// const [select,setSelect]=useState({
//   PropertyType: "house",
//      Negotable:"1" ,
//      Ownership:"select Ownership",
//      PropertyAge:"select Property Age",
//      PropertyApproved:"select Property Approved",
//      BankLoan:"select Bank Loan"
// })

//fetch data
const [data, setData] = useState("")
const submitData = (e) => {
      e.preventDefault()
      console.log(inpval)
      const {Price,PropartyDetails}=inpval;

    fetch("http://localhost:8000/posts/", {
        method: "POST",
        body: JSON.stringify(inpval),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization":`test ${token}`
        }
    }).then((res) => res.json()).then(
        (data) => {
            setData(data)
            settoggle(!toggle)
        // const token=res.token
        // localStorage.setItem('jsonwebtoken',`test ${token}`)
    alert(JSON.stringify(data))
})
  }



//fetchData
  return (

    <div className='container'>
     <form onSubmit={submitData}>      
        <div className='content'>
         {/* <div className="input-box">
            <label for="PropertyType" className="details">Property Type</label>

            <select name="PropertyType" id="PropertyType" placeholder="select Property Type" onChange={(e) =>setSelect({...select, PropertyType: e.target.value} ) }>
              <option value="house">House</option>
              <option value="flat">Flat</option>
              <option value="plot">Plot</option>
              <option value="other">Other</option>
            </select>
          </div>  */}

          {/* <div className="input-box">
            <label for="Negotable" className="details">Negotable</label>

            <select name="Negotable" id='Negotable' placeholder="select Negotable" onChange={(e) => setSelect({ ...select, Negotable: e.target.value })} >
              <option value="select Negotable">select Negotable</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="other">Other</option>
            </select>
          </div> */}
          <div className='input-box'>
            <label for="Price" className='details'>Price</label>

            <input name='Price' id='Price' placeholder='Example:10000' value={inpval.Price} onChange={setVal} />
          </div>

          {/* <div className='input-box' >
            <label for="Ownership" className='details'>Ownership</label>
            <br />
            <select name="Ownership" id='Ownership' placeholder="select Ownership" onChange={(e) => setSelect({ ...select, Ownership: e.target.value })}>
              <option value="select Ownership">select Ownership</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="other">Other</option>
            </select>
          </div> */}
          {/* <div className='input-box'>
            <label for="PropertyAge" className='details'>Property Age</label>

            <select name="PropertyAge" id='PropertyAge' placeholder="select Property Age" onChange={(e) => setSelect({ ...select, PropertyAge: e.target.value })}>
              <option value="select Property Age"></option>

              <option value="house">House</option>
              <option value="flat">Flat</option>
              <option value="plot">Plot</option>
              <option value="other">Other</option>
            </select>
          </div> */}
          {/* <div className='input-box'>
            <label for="PropertyApproved" className='details'>Property Approved</label>

 <select  name="PropertyApproved" placeholder="select Property Approved" onChange={(e) =>setSelect({...select, PropertyApproved: e.target.value} ) }>
<option value="select Property Approved">select Property Approved</option>
<option value="1">1</option>
 <option value="2">2</option>
<option value="3">3</option>
 <option value="other">Other</option>
 </select>
 </div> */}



<div className='input-box'>
<label className='details'> Property Description</label>

            <input name='PropertyDescription' id='PropertyDescription' placeholder='' value={inpval.PropertyDescription} onChange={setVal} />
          </div>

          {/* <div className='input-box'>
            <label for="BankLoan" classNmae="details" >Bank Loan</label>

            <select name="BankLoan" id='BankLoan' placeholder="select Bank Loan" onChange={(e) => setSelect({ ...select, BankLoan: e.target.value })}>
              <option value="select Bank Loan">Bank Loan</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="other">Other</option>
            </select>
          </div> */}
        </div>
        <div className='button1'>

<button style={{ color: 'whitesmoke' }}>Cancel</button>
<button type="submit" ><Link to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/propertydetails`} style={{ color: 'whitesmoke' }} >Save&Coninue</Link></button>
</div>
      </form>
      <Outlet />

    
      {
                data.status === "success" && <div style={{ color: "green" }}>ADDED SUCCESSFULLY</div>
            }{
                data.status === "failed" && <div style={{ color: "red" }}> FAILED</div>

            }

        
      </div>
    



  )
}








