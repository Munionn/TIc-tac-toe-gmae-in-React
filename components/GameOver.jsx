export default function GameOver({winner, onSelect}){
  let showWinner = <p>winner is {winner}</p>
  if(winner === "Draw"){
    showWinner = <p>{winner}</p>
  }   
  return( 
  <div id="game-over">
    <h2> Game Over </h2>
    {showWinner}
    <button onClick={onSelect}>play again  </button>
  </div>
  )

}