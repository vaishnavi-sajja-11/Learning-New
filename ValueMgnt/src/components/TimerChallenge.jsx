import {useState, useRef, useEffect} from 'react';
import Modal from './Modal';

export default function TimerChallenge({title, targetTime}){

    const timer= useRef();
    const dialog = useRef();

    const [ timeRemaining, setTimeRemaining ]=useState(targetTime*1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime *1000;
    if(timeRemaining <=0)
    {
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleReset(){
        setTimeRemaining(targetTime*1000);
    }
    function clickHandler(){
       timer.current = setInterval(()=>{
            setTimeRemaining(previousTimeRemaining=> previousTimeRemaining-100);
        },100);
        
    }
    function handleStop(){
        clearInterval(timer.current);
        useEffect(()=>{
            dialog.current.open();
        },[]);
    }
  
    return(
        <>
        {!timerIsActive && <Modal ref={dialog} targetTime={targetTime} result="Lost" remainingTime={timeRemaining} onReset={handleReset}/>}
        <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} Second{targetTime >1 && 's' }
        </p>
        <p>
            <button onClick={timerIsActive ? handleStop : clickHandler } >{timerIsActive ? "Stop" :"Start"} Challenge</button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive ?  'Timer is running' : 'Timer is Inactive'}
        </p>
        </section>
        </>
    )
}
