import './App.css';

import { useState } from 'react';

import MyClassComponent from './components/MyClassComponent';
import MyFunctionComponent from './components/MyFunctionComponent';
import MyLabelclass from './components/MyLabelclass';
import MyLabelFunction from './components/MyLabelFunction';

function App() {
  const dte = new Date(2021,6,27);
  const users=[
    { id:1, name:"Brown"},
    { id:2, name:"Cony"},
    { id:3, name:"Milk"}
  ]

  const ssusers=[
    { id:5, name:"xxxx"},
    { id:6, name:"yyyy"},
    { id:7, name:"zzzz"}
  ]
  const [color,setColor]=useState("Red");
  

  const handleColorChange = (e)=> {
    console.log("===================" + new Date());
    setColor(e.target.value);
  }

  const [toggle,setToggle] = useState(false);
  const handleToggle = () =>{
    setToggle((p)=>{
      return !p;
    })
  }


  return (
   //React.createElement("div",{},React.createElement("h1",{className:'header'},"First React Project"))

       <div>
       <h1 className='header'>My First React on {dte.toString()}</h1>
       <MyLabelclass/>
       <MyLabelFunction data={users} ts={dte}/>
       <MyLabelFunction data={ssusers} ts={dte}/>
       <input type="text" value={color} onChange={handleColorChange}/>
      <input type="text" value={color} onChange={handleColorChange} />
     
      {!toggle && <MyFunctionComponent color={color}/> }
      {toggle && <MyClassComponent color={color}/> }
      {color} - {toggle}

      <button onClick={handleToggle}>Toggle</button>

       </div> 
  );
}

export default App;
