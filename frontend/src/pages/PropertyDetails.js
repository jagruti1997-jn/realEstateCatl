import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function PropertyDetails() {
  return (
    <div>
      <div style={{ marginLeft: "10px", marginTop: "10px", width: "80%", height: "400px" }}>
        <form>
          <div className='div1' style={{ gap: "80px" }}>

            <div style={{ marginTop: "5px" }}>
              <label for="Length">Length</label>
              <br />
              <input name='Length' placeholder='Example:1000' />
            </div>
            <div style={{ marginTop: "5px" }}>
              <label for="Breadth">Breadth</label>
              <br />
              <input name='Breadth' placeholder='Example:1000' />
            </div>
          </div>

          <div className='div1'>


            <div style={{ marginTop: "10px", marginLeft: "5px" }}>
              <label for="Total Area">Total Area</label>
              <br />
              <input name='Total Area' placeholder='Example:7500' />
            </div>

            <div style={{ marginTop: "10px", marginLeft: "20px" }}>
              <label for="Area Unit">Area Unit</label>
              <br />
              <select style={{ width: "200px" }} name="Area Unit" placeholder="select Area Unit" >
                <option value="select Area Unit">select Area Unit</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>


          <div className='div1'>


            <div style={{ marginTop: "10px" }}>
              <label for="No of BHK">No of BHK</label>
              <br />
              <select style={{ width: "200px" }} name="NoofBHK" placeholder="select No of BHK" >
                <option value="select No of BHK">select No of BHK</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ marginTop: "10px", marginLeft: "20px" }}>
              <label for="No of Floor">No of Floor</label>
              <br />
              <select style={{ width: "200px" }} name="Nooffloor" placeholder="select No of Floor" >
                <option value="select No of Floor">select No of Floor</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className='div1'>


            <div style={{ marginTop: "10px" }}>
              <label for="Attached">Attached</label>
              <br />
              <select style={{ width: "200px" }} name="Attached" placeholder="select Attached" >
                <option value="select Attached">select Attached</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ marginTop: "10px", marginLeft: "20px" }}>
              <label for="Western Toilet">Western Toilet</label>
              <br />
              <select style={{ width: "200px" }} name="Western Toilet" placeholder="select Western Toilet" >
                <option value="select Western Toilet">select Western Toilet</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className='div1'>


            <div style={{ marginTop: "10px" }}>
              <label for="Furnished">Furnished</label>
              <br />
              <select style={{ width: "200px" }} name="Furnished" placeholder="select Furnished" >
                <option value="select Furnished">select Furnished</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ marginTop: "10px", marginLeft: "20px" }}>
              <label for="Car Parking">Car Parking</label>
              <br />
              <select style={{ width: "200px" }} name="Car Parking" placeholder="select Car Parking" >
                <option value="select Car Parking">select Car Parking</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className='div1'>
            <div style={{ marginTop: "10px", marginLeft: "20px" }}>
              <label for="Lift">Lift</label>
              <br />
              <select style={{ width: "200px" }} name="Lift" placeholder="select Lift" >
                <option value="select Lift">select Lift</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ marginTop: "5px" }}>
              <label for="Electricity">Electricity</label>
              <br />
              <input name='Electricity' placeholder='Example:3phase' />
            </div>
          </div>
       <div className='div1' style={{ marginLeft: "-10%" }}>
            <div style={{ marginTop: "10px", marginLeft: "20px" }}>
              <label for="Facing">Facing</label>
              <br />
              <select style={{ width: "200px" }} name="Facing" placeholder="select Facing" >
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

      </div>
      <Outlet />
      <Link style={{ background: "skyblue", color: "white", border: "1px solid skyblue" }} to="/">Previous</Link>
      <Link style={{ marginLeft: "20px", borderRadius: "15px", border: "1px solid blue", background: "blue", color: "white" }} to="/generalinfo">Save&Coninue</Link>

    </div>
  )
}
