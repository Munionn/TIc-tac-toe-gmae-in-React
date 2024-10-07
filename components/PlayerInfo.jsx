import { useState } from "react"

export default function PlayerInfo({name, symbol, isActive, onChange}){
  let [playerName , changeName] = useState(name);
  const [isEditing, setIsEditing]  = useState(false);
  function HandleEditing(){
    if(isEditing){
      onChange(symbol, playerName);
    }
    setIsEditing((isEditing) => !isEditing);
  }
  function HandleChange(event)
  {
    changeName(event.target.value);
  }
  let showingSpan = <span className="playuer-name">{playerName}</span>
  if(isEditing){
    showingSpan = <input type="text"  required  value = {playerName} onChange={HandleChange}/>
  } 
     

  return(
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {showingSpan}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => HandleEditing()}>{isEditing ? "Save" : "Edit"}</button>
    </li>
          
  )
}

