import { useState, version } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Seo} from './components/Seo.jsx'
function App() {
  return (
    <>
      <Seo title = 'Hola React 19' description = 'Hola, react 19' />
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h3 style={{marginBottom:0}}>Hola, react 19</h3>
          <small style={{color: "yellow", fontSize: "10px"}}>La version es {version}</small>
      </div>
      
    </>
  )
}

function AnotherComponent () {
  return (
    <Seo />
  )
}

export default App
