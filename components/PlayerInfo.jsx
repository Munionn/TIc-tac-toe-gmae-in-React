import { useState } from "react"

export default function PlayerInfo({name, symbol}){
  const [isEditing, setIsEditing]  = useState(false);
  function HandleEditing(){
    setIsEditing(isEditing&&true);
    console.log(isEditing);
  }
  

  return(
    <li>
      <span className="player">
        <span className="playuer-njame">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => HandleEditing()}>Edit</button>
    </li>
          
  )
}

