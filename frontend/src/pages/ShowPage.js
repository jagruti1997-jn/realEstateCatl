import React,{useState,useEffect} from 'react'
import { useParams,useLocation } from 'react-router-dom'
const ShowPage = () => {
  const location = useLocation();
  const data=location.state




  return (
    <div>
      <h3>User Details</h3>
     <div>
      <div><b>Name:</b> </div>
      <div>{data.Name}</div>
    </div>
    <div>
      <div><b>Email Id: </b></div>
      <div>{data.Email}</div>
    </div>
    <div>
      <div><b>Mobile no:</b> </div>
      <div>{data.Mobile}</div>
    </div>
    <div>
      <div>City: </div>
      <div>{data.City}</div>
    </div>
    <div>
      <div>Pincode: </div>
      <div>{data.Pincode}</div>
    </div>
    <div>
      <div>User: </div>
      <div>{data.user}</div>
    </div>
    <div>
      <div>Property Type: </div>
      <div>{data.PropertyType}</div>
    </div>
    <div>
      <div>Price: </div>
      <div>{data.Price}</div>
    </div>
    <div>
      <div>Property Age: </div>
      <div>{data.Age}</div>
    </div>
    <div>

      <div>Property Description: </div>
      <div>{data.PropertyDescription}</div>
    </div>
    <div>
      <div>Bank Loan: </div>
      <div>{data.BankLoan}</div>
    </div>
    <div>
      <div>Property details: </div>
      <div>{data.PropertyType}</div>
    </div>
    <div>
      <div>Property details: </div>
      <div>{data.PropertyType}</div>
    </div>
    <div>
      <div>Area Unit: </div>
      <div>{data.AreaUnit}</div>
    </div>
    <div>
      <div>Electricity: </div>
      <div>{data.Electricity}</div>
    </div>
    <div>
      <div>Lift: </div>
      <div>{data.Lift}</div>
    </div>
    <div>
      <div>NoofFloor: </div>
      <div>{data.NoofFloor}</div>
    </div>


      </div>


    
  )
  }
  

export default ShowPage