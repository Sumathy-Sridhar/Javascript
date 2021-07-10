import React, {
  useEffect,
  useState,
} from 'react';

export default function DisplayForm() {
    const [Details,setDetails] = useState([]);
    useEffect(()=>{
        console.log("Executed after render method=======");
        fetch("http://localhost:4003/details").then(res => res.json()).then(data=>{
          console.log(data);
          setDetails(data);
        }).catch(e=>{
          console.error("ERR in jso data...");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })
    },[])
            return (
                <div>
                <div class="table-wrapper">
         <table class="fl-table">
         <thead>
         <tr>
         <th> FirstName</th>
         <th> LastName </th>
         <th> Age</th>
         <th>Email Id</th>
         <th> College name</th>
         <th> City </th>
         <th>Department</th>
         <th>Contact Number</th>
         </tr>
        </thead>
        <tbody>
        { Details.map((x)=>{
            return (
                <>
                <tr>
         <td> {x.firstname}</td>
         <td> {x.lastname}</td>
         <td> {x.age}</td>
         <td> {x.college}</td>
         <td> {x.city}</td>
         <td> {x.department}</td>
         <td> {x.email}</td>
         <td> {x.phonenumber}</td>
         </tr>
         </>)
        })}
         </tbody>
         </table>
          </div>
        </div>
            )
        }
        
      