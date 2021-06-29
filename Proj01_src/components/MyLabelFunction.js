import React from 'react';

const MyLabelFunction=({data,ts})=>{
    console.log("My label function....");
    console.log(data);
    console.log(ts);
    let response="";
    let b=true;
    if(b){
        response=
        <>
        <h1> Multiple Line Respone Statement</h1>
        <div>The Value is True</div>
        </>
    }
    else{
        response=<div>The Value is False</div>
    }
    return (
        <div>
        <h2> I am from Child Component - Function </h2>
        <h1>Label function Props data using destructions</h1>
        {
            data.map(x=>{
                return(
                    <div>
                    <h1> {x.id}</h1>
                    <h1>{x.name}</h1>
                    </div>
                )
            })
        }
        <div>{response}</div>
        </div>
    );
}
export default MyLabelFunction;