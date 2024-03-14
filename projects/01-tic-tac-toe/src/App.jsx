import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS ={
  X: 'x',
  O: 'O'
}

const board = Array(9).fill(null)

function App() {
  return (
   <main className='board'>
    <h1>Tic tac toe</h1>
    <section className='game'>
      {
        board.map((_ , index) => {
          return (
            <div className='cell' key={index}>
              <span className='cell_content'>           {index}
              </span>
            </div>
          )
        })
      }  
    </section> 
   </main>
  )
}

export default App
