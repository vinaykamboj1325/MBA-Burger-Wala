import React from "react";
import { Country, State } from "country-state-city";
import { useState } from "react";
import {useDispatch} from "react-redux"
import{useNavigate} from "react-router-dom"

const Shipping = () => {
   const [hno , setHno] = useState("");
   const [city , setCity] = useState("");
   const [country , setCountry] = useState("");
   const [state , setState] = useState("");
   const [phoneNo , setPhoneNo] = useState("");
   const [pinCode , setPinCode] = useState("");

   const dispatch = useDispatch();
   const navigate = useNavigate();

    const submitHandler =(e)=>{
      e.preventDefault();
       navigate("/confirmorder")
    };

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>

        <form onSubmit={submitHandler}>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." value={hno} onChange={(e)=>setHno(e.target.value)} required/>
          </div>

          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" value={city} onChange={(e)=>setCity(e.target.value)} required />
          </div>

          <div>
            <label>Country</label>

            <select value={country} onChange={(e)=>setCountry(e.target.value)} required>
              <option>Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode} >
                    {i.name}
                  </option>
                ))}
            </select>
          </div>

          {
            country && 
            <div>
              <label>State</label>   
             <select value={state} onChange={(e)=>setState(e.target.value)} required>
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry("IN").map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select> 
          </div>
          }

          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" value={pinCode} onChange={(e)=>setPinCode(e.target.value)} required/>
          </div>
          <div>
            <label>Phone No.</label>
            <input type="number" placeholder="Enter Phone No." value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)} required/>
          </div>
          <button to="/paymentsuccess" type="submit" >Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
