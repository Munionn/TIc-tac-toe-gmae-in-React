import { useState } from "react"
import Log from "../components/Log";
import PlayerInfo from "../components/PlayerInfo"
import GameBoard from "../components/GameBoard"
import { WINNING_COMBINATIONS } from "../components/wining-combination";

const initialBoard =[
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function getPlayer(turnrs)
{
  var curPlayer = "X";
  if(turnrs.length > 0 && turnrs[0].people === "X"){
    curPlayer = "O";
    
  }
  return curPlayer;
}

function isGameOver(gameboard){
  for(const combination of WINNING_COMBINATIONS){
    const firstCage =  gameboard[combination[0].row][combination[0].column]
    const secondCage = gameboard[combination[1].row][combination[1].column]
    const thirdCage = gameboard[combination[2].row][combination[2].column]
    if( firstCage && firstCage === secondCage && secondCage === thirdCage){
      return firstCage;
    }
    
  }
  return null;
}


function App() {
  const [gameTurn, SetGameTurn] = useState([]);
 
  var activePlayer = getPlayer(gameTurn);

  // game board inisialization 
  const gameboard = initialBoard.map(row => [...row]);

  for (const val of gameTurn) {
    const { square, people: player } = val;
    const { row, colom } = square;
    gameboard[row][colom] = player; 
  }
  // check if game is over 
  let win = isGameOver(gameboard);
  
  
  function HandleActivePlayer(rowIndex, colomIndex){
    SetGameTurn(
      (prevTurns) => {
        let curPlayer = getPlayer(prevTurns);
        const updateTurn = [{square:{row: rowIndex, colom: colomIndex}, people: curPlayer},...prevTurns]
        return updateTurn;
      }
    );
    
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo name ="Player 1" symbol="X" isActive={activePlayer === "X"}/>
          <PlayerInfo name ="Player 2" symbol="O" isActive={activePlayer ==="O"}/>
        </ol>

        {win && <p>Winner is {win}</p>}

        <GameBoard onSelectSquare={HandleActivePlayer} board={gameboard}/>
      </div>
      
      <Log turns={gameTurn}/>
    
    </main>
  ) 
}

export default App
