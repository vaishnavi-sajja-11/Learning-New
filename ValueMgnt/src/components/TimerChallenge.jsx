import {useState, useRef} from 'react';

export default function TimerChallenge({title, targetTime}){

    const timer= useRef();;
    const [ timerExpired, setTimerExpired ] = useState(false);
    const [ timerStarted, setTimerStarted ] = useState(false);

    function clickHandler(){
        setTimerStarted(true);
       timer.current = setTimeout(()=>{
            setTimerExpired(true);
        },targetTime*1000);
    }
    function handleStop(){
        clearTimeout(timer.current);
    }
    return(
        <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} Second{targetTime >1 && 's' }
        </p>
        <p>
            <button onClick={timerStarted ? handleStop : clickHandler } >{timerStarted ? "Stop" :"Start"} Challenge</button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
            {timerExpired ? 'Game Over!' : 'Timer is running'}
        </p>
        </section>
    )
}
