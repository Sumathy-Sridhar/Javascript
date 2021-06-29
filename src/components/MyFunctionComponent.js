import React, {
  useEffect,
  useState,
} from 'react';

export default function MyFunctionComponent({color}) {
    const [data, setData] = useState({
        name: "Functional Component",
    ts: new Date(),
    age:10,
    count: 0
   });
   const [age,setAge]=useState(10);
      const handleButtonClick = ()=> {
        setData((prev)=>{
              return {
                  ...prev,
                  count:prev.count+1
              }
          });
    
          setAge(Math.random()*1000);
      }
    
      useEffect(()=>{
          console.log("i am like a constructor=" + age);
          return () => { console.log("componentWillUnmount effect"); }
      },[age])
    
    return (
        <div>
        <h1 style={{ 
            color:color
            }}>My Function Component</h1>
    <h1>Name :  {data.name} </h1>
    <h1> Date : {data.ts.toString()}</h1>
    <h1> Count: {data.count}</h1>
    <h1> Age: {data.age}</h1>
    <h1> <button  onClick={handleButtonClick}> Increment Count </button></h1>
        </div>
    )
}

