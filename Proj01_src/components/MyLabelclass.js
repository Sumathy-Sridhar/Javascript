import React, { Component } from 'react';

class MyLabelclass extends Component {
    constructor(){
        super();
    }

    
    render() {
       const datas=["Sumathy","Mathew","Ashok"];
        const [a,b,c]=datas;
   
        return (
            <div>
                 <h1>My First React on Child Component {a} -- {b} -- {c} </h1>
                 {
                     datas.map((x)=>{
                         return (
                          <>  <h2>Array Elements</h2> 
                            <h4> The Data is : {x} </h4> 
                            </>
                         )
                     })
                 }
            </div>
        )
    }
}
export default MyLabelclass;