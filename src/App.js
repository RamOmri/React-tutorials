import './App.css';
import React, { useState, useEffect } from 'react'



function App() {
  const [emotion, setEmotion] = useState('frustrated')

  useEffect(()=>{
    console.log("it is" + emotion)
  })
  return (
    <div className="App" style = {{textAlign:'left'}}>
       <h1> current emotion is {emotion}</h1>
      <button onClick = {()=>{
        setEmotion('happy')
      }}>
        cheer up
      </button>
      <button onClick = {()=>{
        setEmotion('frustrated')
      }}>
        frustrate
      </button>
    </div>
  );
}

export default App;
