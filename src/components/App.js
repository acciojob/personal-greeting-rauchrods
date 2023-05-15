
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  let [name,setname]=useState("");

  function changefunc(e){
     setname("Hello " + e.target.value + "!");
  }


  return (
    <div>       
        <label htmlFor="name">Enter your name:</label>
        <input type="text" name="" id="name" onChange={changefunc}/>
        <p>{name}</p>
    </div>
  )
}

export default App
