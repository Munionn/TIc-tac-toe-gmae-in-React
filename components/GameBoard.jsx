

export default function GameBoard({onSelectSquare, board }){
  let gameboard = board;
  
  return( 
  <ol id="game-board">
    {gameboard.map((row, rowIndex) =>( 
      <li key={rowIndex}>
      <ol>{row.map((colom, colomIndex) =>(
        <li key={colomIndex}>
        <button onClick={() => onSelectSquare(rowIndex, colomIndex)} disabled={gameboard[rowIndex][colomIndex] !== null}>
          {colom}
          </button>
      </li> 
    ))}
      </ol>
    </li>))}
  </ol>
  )
}