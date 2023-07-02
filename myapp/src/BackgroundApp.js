import React from 'react'

function BackgroundApp({input,submitHandler,onChangeHandler}) {
  return (
  <div className="my-app">
    <form onSubmit={(e)=>e.preventDefault()}>

        <label >PLEASE TYPE FİRST COLOR</label>
        <input type="text"
        value={input.color1}
        name="color1" 
        onChange={onChangeHandler}
        className="input"/>

        <label>PLEASE TYPE SECOND COLOR</label>        
        <input type="text"
        value={input.color2}
        name="color2" 
        onChange={onChangeHandler}
        className="input"
        />
       
      <label for="directionSelect">Select Gradient Direction:</label>
      <select id="directionSelect">
        <option value="to top">To Top</option>
        <option value="to bottom">To Bottom</option>
        <option value="to left">To Left</option>
        <option value="to right">To Right</option>
      </select>
      
      <button type="submit" onClick={submitHandler}>SEND</button>
  

    </form>
  </div>
    
  )
}

export default BackgroundApp
