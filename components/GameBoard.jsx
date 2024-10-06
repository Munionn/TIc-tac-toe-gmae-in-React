import { useState, useTransition } from "react";
var initialBoard =[
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({onSelectSquare, turnrs }){
  let gameboard = initialBoard.map(row => [...row]);

  for (const val of turnrs) {
    const { square, people: player } = val;
    const { row, colom } = square;
    if(gameboard[row][colom] == null){
      gameboard[row][colom] = player;
      console.log("changed");
    }
  }
  
  return( 
  <ol id="game-board">
    {gameboard.map((row, rowIndex) =>( 
      <li key={rowIndex}>
      <ol>{row.map((colom, colomIndex) =>(
        <li key={colomIndex}>
        <button onClick={() => onSelectSquare(rowIndex, colomIndex)}>{colom}</button>
      </li> 
    ))}
      </ol>
    </li>))}
  </ol>
  )
}