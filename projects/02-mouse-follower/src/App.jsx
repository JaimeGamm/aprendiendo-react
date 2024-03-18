import {useEffect, useState} from "react"
import {FollowMouse} from './components/FollowMouse'
import './App.css'


function App() {
  const [mounted, setMounter] = useState(true)

    return (
      <main>
        {mounted&&<FollowMouse/>}
        <button onClick={()=>setMounter(!mounted)}>
          Toggle mounted FollowMouse componente
        </button>
      </main>
      
    )
}

export default App
