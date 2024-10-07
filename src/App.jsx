import { useState } from "react"
import Log from "../components/Log";
import PlayerInfo from "../components/PlayerInfo"
import GameBoard from "../components/GameBoard"
import { WINNING_COMBINATIONS } from "../components/wining-combination";
import GameOver from "../components/GameOver";

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

function isGameOver(gameboard, players){
  for(const combination of WINNING_COMBINATIONS){
    const firstCage =  gameboard[combination[0].row][combination[0].column]
    const secondCage = gameboard[combination[1].row][combination[1].column]
    const thirdCage = gameboard[combination[2].row][combination[2].column]
    if( firstCage && firstCage === secondCage && secondCage === thirdCage){
      return players[firstCage];
    }
    
  }
  return null;
}

function ShowGameBoard(gameTurn){
  const gameboard = [...initialBoard.map(innnerArray => [...innnerArray])]

  for (const val of gameTurn) {
    const { square, people: player } = val;
    const { row, colom } = square;
    gameboard[row][colom] = player; 
  }
  return gameboard
}


function App() {
  const [players, setPlayers] = useState(
    {
      "X" : "Player 1",
      "O" : "Player 2"
    }
  );
  // function that change name of playere
  function handlePlayers(symbol, newName){
    setPlayers((prevArray) => 
    {
      return {...prevArray, [symbol] : newName}
    });
  }
  const [gameTurn, SetGameTurn] = useState([]);
  function Reset(){
    SetGameTurn([]);
  }

  var activePlayer = getPlayer(gameTurn);

  // game board inisialization 
  const gameboard = ShowGameBoard(gameTurn);
  // check if game is over 
  let win = isGameOver(gameboard, players);
  let showingEnd = null;
  if(!win && gameTurn.length === 9){
    win = "Draw"; 
  }
  if(win){
    showingEnd = <GameOver winner={win} onSelect={Reset}/>
  }  
  
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
          <PlayerInfo name ={players.X} symbol="X" isActive={activePlayer === "X"} onChange={handlePlayers}/>
          <PlayerInfo name ={players.O} symbol="O" isActive={activePlayer ==="O"} onChange={handlePlayers}/>
        </ol>
        <GameBoard onSelectSquare={HandleActivePlayer} board={gameboard}/>
        {showingEnd}
      </div>
      <Log turns={gameTurn}/>
    
    </main>
  ) 
}

export default App
