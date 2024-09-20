import {useState, useRef} from 'react';

export default function Player() {
  const inputVal = useRef();
  const [playName, setplayerName ] = useState(null);

  function ClickHandler(){
    setplayerName(inputVal.current.value);
    inputVal.current.value='';
  }
  
  return (
    <section id="player">
      <h2>Welcome {playName ?? 'unknown entity'}</h2>
      <p>
        <input ref={inputVal} type="text" />
        <button onClick={ClickHandler}>Set Name</button>
      </p>
    </section>
  );
}
