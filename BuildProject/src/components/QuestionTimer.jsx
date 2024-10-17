import {useState, useEffect} from 'react';


export default function QuestionTimer({timeout, onTimeOut}){
    const [remaianingTime, setRemaianingTime] = useState(timeout);

    useEffect(()=>{
        const timer = setTimeout(onTimeOut,timeout);
        return ()=>{
            clearTimeout(timer);
        }
    },[timeout,onTimeOut]);
    
    useEffect(()=>{
        const timer = setInterval(()=>{
            setRemaianingTime(prevRemainingTime => prevRemainingTime-100);
        },100);
        return () =>{
            clearInterval(timer);
        }
    },[]);
    
    return(
        <>  
        <progress id="question-time" max={timeout} value={remaianingTime}></progress>
        </>

    )
}