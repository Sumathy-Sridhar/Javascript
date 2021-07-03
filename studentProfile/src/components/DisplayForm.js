import React from 'react';

export default function DisplayForm(props) {
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
         <th>Department</th>
         <th>Contact Number</th> 
         </tr>
        </thead>
        <tbody>
         <tr>
         <td> {props.data.firstname}</td>
         <td> {props.data.lastname}</td>
         <td> {props.data.age}</td>
         <td> {props.data.college}</td>
         <td> {props.data.department}</td>
         <td> {props.data.email}</td>
         <td> {props.data.phonenumber}</td>
         </tr>
         </tbody>
         </table>
          </div>
        </div>
            )
        }
        
      