import { useState } from 'react'
import confetti from "canvas-confetti"
import {Square} from "./components/Square.jsx"
import {TURNS} from "./constants.js"
import {checkWinnerFrom, checkEndGane} from "./logic/board.js"
import {WinnerModar} from "./components/WinnerModal.jsx"
import {saveGame, resetGameStorage} from "./logic/storage/index.js"
import './App.css'



function App() {
  const [board,setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return (Array(9).fill(null))
  })
  
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  } 

  const updateBoard = (index) => {
    if(board[index] || winner) return
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    
    saveGame({board: newBoard, turn:newTurn})

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner)
    }else if (checkEndGane(newBoard)){
      setWinner(false)
    }
  }
  return (
   <main className='board'>
    <h1>Tic tac toe</h1>
    <button onClick={resetGame}>Empezar de nuevo</button>
    <section className='game'>
      {
        board.map((square , index) => {
          return (
            <Square
            key={index}
            index={index}
            updateBoard = {updateBoard}
            >
            {square}
            </Square>
          )
        })
      }  
    </section> 
    <section className='turn'>
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
    <WinnerModar resetGame={resetGame} winner={winner}/>
   </main>
  )
}

export default App
