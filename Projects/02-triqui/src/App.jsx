import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { Turns } from './components/constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
function App() {
  //States
  
  const [board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('board') != null ? JSON.parse(window.localStorage.getItem('board')) : Array(9).fill(null)
    return boardFromStorage
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn') != null ? window.localStorage.getItem('turn') : Turns.X
    return turnFromStorage
    
  })
  const [winner, setWinner] = useState(null)

  // Methods

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(Turns.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    //no overwrite board
    if (board[index] || winner) return
    //Update Board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //Change turn
    const newTurn = turn === Turns.X ? Turns.O : Turns.X
    setTurn(newTurn)
    // Save game
    window.localStorage.setItem('board',JSON.stringify(newBoard))
    window.localStorage.setItem('turn',newTurn)
    // check win
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner) {
      confetti()
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)){
      setWinner(false) // DRAW
    }
  }

  return (
    <main className='board'>
      <h1> Triqui </h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className='game'>
        {
          board.map((_,index) => {
            return(
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === Turns.X}> {Turns.X} </Square>
        <Square isSelected={turn === Turns.O}> {Turns.O} </Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )

}

export default App