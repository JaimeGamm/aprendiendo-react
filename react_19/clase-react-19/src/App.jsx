import { useState, version } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h1>Hola react {version}</h1>
      </div>
      
    </>
  )
}

export default App
