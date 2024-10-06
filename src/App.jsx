import { act, useState } from "react"
import Log from "../components/Log";
import PlayerInfo from "../components/PlayerInfo"
import GameBoard from "../components/GameBoard"
function App() {
  const [activePlayer, changeActivePlayer] = useState("X");
  const [gameTurn, SetGameTurn] = useState([]);
  function HandleActivePlayer(rowIndex, colomIndex){
    changeActivePlayer(activePlayer === 'X' ? 'O' : 'X');
    SetGameTurn(
      (prevTurns) => {
        let curPlayer = "X";
        if(prevTurns.length > 0 && prevTurns[0].people === "X"){
          curPlayer = "O";
          
        }
        const updateTurn = [{square:{row: rowIndex, colom: colomIndex}, people: curPlayer},...prevTurns]
        return updateTurn;
      }
    )
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo name ="Player 1" symbol="X" isActive={activePlayer === "X"}/>
          <PlayerInfo name ="Player 2" symbol="O" isActive={activePlayer==="O"}/>
          </ol>
          <GameBoard onSelectSquare={HandleActivePlayer} turnrs={gameTurn}/>
      </div>
      <Log turns={gameTurn}/>
    </main>
  ) 
}

export default App
