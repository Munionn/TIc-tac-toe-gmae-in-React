import { useState } from "react"

export default function PlayerInfo({name, symbol}){
  let [playerNmae, changeName] = useState(name);
  const [isEditing, setIsEditing]  = useState(false);
  function HandleEditing(){
    setIsEditing((isEditing) => !isEditing);
    
  }
  function HandleChange(event)
  {
    changeName(event.target.value);
  }
  let showingSpan = <span className="playuer-name">{playerNmae}</span>
  if(isEditing){
    showingSpan = <input type="text"  required  value = {playerNmae} onChange={HandleChange}/>
  } 
     

  return(
    <li>
      <span className="player">
        {showingSpan}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => HandleEditing()}>{isEditing ? "Save" : "Edit"}</button>
    </li>
          
  )
}

