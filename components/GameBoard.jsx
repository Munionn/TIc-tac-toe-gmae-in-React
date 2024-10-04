const initialBoard =[
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard(){
  return( 
  <ol id="game-board">
    {initialBoard.map((row, rowIndex) => <li key={rowIndex}>
      <ol>{row.map((colom, colomIndex) =><li key={colomIndex}>
        <button>{colom}</button>
      </li> )}
      </ol>

    </li>)}

  </ol>
  )
}