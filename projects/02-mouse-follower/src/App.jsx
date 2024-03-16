import {useEffect, useState} from "react"
import './App.css'

const FollowMouse  = () => {
  const [enabled, setEnable] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})
    useEffect(() =>{
      console.log('efecto')
      const handlemove = (event) =>{
        const {clientX, clientY} = event
        console.log('handlemover', {clientX, clientY})
        setPosition({x:clientX, y:clientY})
      }

      if(enabled){
        window.addEventListener('pointermove',handlemove)
      }
      return () =>{
        window.removeEventListener('pointermove',handlemove)
      }
    },[enabled])

    useEffect(()=>{
      document.body.classList.toggle('no-cursor',enabled)
      return() => {
        document.body.classList.remove('no-cursor')
      }
    },[enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />

        
        <button onClick={()=>setEnable(!enabled)}>{enabled ? 'Desactivar': 'Activar'} seguir puntero</button>
    </>
  )
}
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
