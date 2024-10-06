export default function Log({turns})
{
  return (
    <ol id="log">
      {turns.map((turn  => <li key={`${turn.square.row}${turn.square.colom}`}>
        player:{turn.people}, row: {turn.square.row}, 
       colom: {turn.square.colom}
       </li>))}
      
    </ol>
  )
}