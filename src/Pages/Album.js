import React, { useState } from "react";
import '../Assets/Styles/Game.css'
import { Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Album = () => {

  const [turn, setTurn] = useState('X');
  const [cells, setCells] = useState(Array(9).fill(''))
  const [error, setError] = useState('')
  const [winner, setWinner] = useState()

  const ckeckForWinner = (squares) => {

    let combos = {
      across: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
      ],
      down: [
        [0,3,6],
        [1,4,7],
        [2,5,8],
      ],
      diagon: [
        [0,4,8],
        [2,4,6],

      ],
    }

    for(let combo in combos){
      combos[combo].forEach((pattern) => {
        if((squares[pattern[0]] === squares[pattern[1]] &&   squares[pattern[1]] === squares[pattern[2]])){
          setWinner(squares[pattern[0]])
        }
      })
    }

  }

  const handleClick = ( num ) => {

    if(cells[num] !== ''){
      setError('Already clicked!')
    }else{
      setError('')
    }

    let squares = [...cells]

    if(turn === 'X'){
      squares[num] = 'X'
      setTurn('O');
    }
    else{
      squares[num] = 'O'
      setTurn('X');
    }

    ckeckForWinner(squares)
    setCells(squares)
  };

  const handleRestart = () => {
    setWinner(null)
    setCells(Array(9).fill(''))
  }

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{ cells[num] }</td>
  }

  return (
    <>
      <img src={require("../Assets/Images/galerie.jpg")} id="game" alt="logo" />
      <h1 id="title">Tic Tac Toe</h1>
      <button id="again" onClick={() => {handleRestart()}}>Play Again</button>
      <strong id="Error">{error && <Alert variant="danger">{error}</Alert>}</strong>
      <strong id="winner">{winner && <Alert variant="succes">{winner}  is the winner </Alert>}</strong>
      <div id="bk">
        <table>
          <strong id = "turn">Turn: {turn}</strong> 
          <tbody>
            <tr>
              <Cell num={0}/>
              <Cell num={1}/>
              <Cell num={2}/>
            </tr>
            <tr>
              <Cell num={3}/>
              <Cell num={4}/>
              <Cell num={5}/>
            </tr>
            <tr>
              <Cell num={6}/>
              <Cell num={7}/>
              <Cell num={8}/>
            </tr>
          </tbody>
        </table>
      </div>
      <Link id="home1" to="/home">Home Page</Link>
    </>
  );
}
  
export default Album;