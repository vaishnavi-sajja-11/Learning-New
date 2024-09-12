import {useState} from 'react';

export default function Player({initialName , symbol , isActive , onChangeName})
{
    const [playerName, setPlayerName ] = useState(initialName);
    const [ editing , setEditing] = useState(false);
    function handleClick()
    {
        setEditing((editing) => (!editing));
        if(editing){
            onChangeName(symbol,playerName);
        }
    }
    function handleChange(e){
        setPlayerName(e.target.value);
    }
    
    return (

        <li className={isActive ? 'active' : undefined}>
            <span className="player"></span>
            {editing ? (<input type="text" defaultValue={playerName} required onChange={handleChange}></input>) :
                <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            <button onClick={handleClick}>{!editing ? "Edit" : "Save"}</button>
          </li>

    );
}