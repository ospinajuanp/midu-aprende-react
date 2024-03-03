import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGameFrom } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import './App.css'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn]=useState(TURNS.X)

  const [winner ,setWinner]=useState(null)

  const resetGame = ()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index)=>{
    // no actualizamos esta posición
    // si ya tiene algo
    if (board[index] || winner) return 
    // actualizamos esta posición
    // si no tiene algo
    const newBoard = [...board]
    newBoard[index]=turn
    setBoard(newBoard)
    //cambiamos de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    }else if(checkEndGameFrom(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className='game'>
        {
          board.map((cell, index)=>{
            return(
              <Square 
                key={index} 
                index={index}
                updateBoard={updateBoard}
                className='cell'
              >
                <span className='cell_content'>
                  {board[index]}
                </span>
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn == TURNS.X} >{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O} >{TURNS.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
