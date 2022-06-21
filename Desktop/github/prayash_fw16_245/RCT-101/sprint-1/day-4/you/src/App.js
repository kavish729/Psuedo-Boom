import Square from "./Square";
import React, { useState,useEffect } from "react";
const initialState = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, setGameState] = useState(initialState);
  const [xChance,setXChance] = useState(false);

  const [theWinner,setTheWinner] = useState("")
  const squareClick = (value) => {
   let str = Array.from(gameState)
   str[value] = xChance ? "X" : "0";
   setGameState(str)
   setXChance(!xChance)

  };
  useEffect(() => {
   const winner =  checkWinner();
   if(winner){
    setTheWinner(`YIPPY !🎉🎉 ${winner} has win the game`)

     setGameState(initialState)
   }
   
  
  },[gameState])

const checkWinner = () => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return gameState[a];
    }
  }

 return null;
}


  return (
    <div className="main-header">
      <p className="text-header-part">Tic Tac Toe🧐</p>
      <div className="row jc-center">
        <Square
          className="border-bottom-right"
          state={gameState[0]}
          onClick={() => squareClick(0)}
        />
        <Square
          className="border-bottom-right"
          state={gameState[1]}
          onClick={() => squareClick(1)}
        />
        <Square
          className="border-bottom"
          state={gameState[2]}
          onClick={() => squareClick(2)}
        />
      </div>
      <div className="row jc-center">
        <Square
          className="border-bottom-right"
          state={gameState[3]}
          onClick={() => squareClick(3)}
        />
        <Square
          className="border-bottom-right"
          state={gameState[4]}
          onClick={() => squareClick(4)}
        />
        <Square
          className="border-bottom"
          state={gameState[5]}
          onClick={() => squareClick(5)}
        />
      </div>
      <div className="row jc-center">
        <Square
          className="border-right"
          state={gameState[6]}
          onClick={() => squareClick(6)}
        />
        <Square
          className="border-right"
          state={gameState[7]}
          onClick={() => squareClick(7)}
        />
        <Square state={gameState[8]} onClick={() => squareClick(8)} />
      </div>
      <p className="theAllMighty">{theWinner}</p>
      <button onClick={()=>{setGameState(initialState)
      setTheWinner("")
      }} className="clear-btn">CLEAR</button>
      <p className="enjoy-the-game">Enjoy The Game 👯‍♂️</p>
    </div>
  );
}

export default App;
