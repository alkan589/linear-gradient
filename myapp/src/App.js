import React, { useState } from 'react'
import BackgroundApp  from './BackgroundApp';


function App() {
const [input,setInput]=useState({color1:"purple",color2:"red"});
const rootElement=document.getElementById("root");
const submitHandler = () => {
  const directionSelection = document.getElementById("directionSelect");
  var selectedDirection = directionSelection.value;
  
  rootElement.style.background = `linear-gradient(${selectedDirection}, ${input.color1}, ${input.color2})`;

  setInput({
    color1: "",
    color2: ""
  });
}

const onChangeHandler = (e) => {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  });
};

  return (
    <div class="body">
      <BackgroundApp onChangeHandler={onChangeHandler} input={input} setInput={setInput} submitHandler={submitHandler}/>
    </div>
  )
}

export default App

