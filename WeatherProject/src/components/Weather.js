import './Jigina.css';

import React, { useState } from 'react';

import Wereport from '../Wereport.json';

export default function Weather() {
    const[cityState,setcityState]=useState("");
    const dte=new Date();
    return (
        <div>
       <header> <h1> WEATHER REPORT </h1> </header>
          <select name="cities" id="cities" onChange={(e)=>{
             const selectedCity=e.target.value;
            setcityState(selectedCity);
          }
        }>
          <option value="Select city">Select City</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kolkata">Kolkata</option>
          </select><br></br> <br></br>
          <div>
          <label> <b> Selected City:  </b></label>
          <input type="text" value={cityState}/>
          <br></br>
          <br></br>
          </div>
         <div>
         <div class="table-wrapper">
         <table class="fl-table">
         <thead>
         <tr>
         <th> City</th>
         <th> Date </th>
         <th> Max Temperature</th>
         <th> Min Temperature </th>
         <th> Precipitation </th>
         <th> Temperature</th>
         <th> Relative Humidity </th>
         <th> conditions </th>
         </tr>
         </thead>
         <tbody >
         {
            Wereport.filter((data)=>{
              if(data.city.includes(cityState)){
                return data;
              }}).map(data=>{
                return(  
                  <>
                  <tr>
                  <td>{data.city} </td>
                  <td> {dte.toString()} </td>
                  <td>{data.max_temperature}</td>
                  <td>{data.min_temperature}</td>
                  <td> {data.temperature}</td>
                  <td>{data.precipitation}</td>
                  <td>{data.relative_humidity}</td>
                  <td> {data.conditions} </td>
                  </tr>
                  </>
                )
            })
        }
        </tbody>
        </table>
        </div>
        </div>
        </div>
    )
}
