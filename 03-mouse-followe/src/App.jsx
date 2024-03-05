import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x:0, y:0 })

  useEffect(()=>{
    const hadleMove = ( event )=>{
      const {clientX, clientY} = event
      console.log({clientX,clientY})
      setPosition({x:clientX, y:clientY})
    }
    if (enable){
      window.addEventListener('pointermove',hadleMove )
    }
    return ()=>{
      window.removeEventListener('pointermove',hadleMove )
      setPosition({x:0, y:0})
    }
  },[enable])

  return (
    <main>
      <div style={{
        position:'absolute',
        backgroundColor:'#222',
        border:'2px solid #fff',
        borderRadius:'50%',
        opacity:.8,
        pointerEvents:'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transition: 'transform 0.9s linear',
        transform:`translate(${position.x}px,${position.y}px)`
      }}></div>
      <button onClick={() => setEnable(!enable)}>{enable ? 'Disable' : 'Enable'} follow punter</button>
    </main>
  )
}

export default App
