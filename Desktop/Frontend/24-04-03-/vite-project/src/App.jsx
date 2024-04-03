import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const inputRef = useRef ()

 const changeStyle = ()=>{
  inputRef.current.style.width = '30rem'
 }

  return (
    <>
    <input onFocus={changeStyle} placeholder='hei' ref={inputRef}/>
    <button>Click!</button>


    </>
  )
}

export default App
