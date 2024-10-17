import QUESTIONS from '../assets/questions.js';
import completed from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';
import {useState, useCallback,useRef} from 'react';

export default function Quiz(){
    //const shuffledAnswers = useRef();
    const [currentAnswerState, setCurrentAnswerState] = useState('');
    const [ answer , setAnswer] = useState([]);

    const activeQuestionIndex =  currentAnswerState === '' ? answer.length : answer.length-1 ;
    const quizOver = QUESTIONS.length === activeQuestionIndex ? true : false;

    if(quizOver)
    {
           return <div id="summary"><h2>Quiz Completed!</h2><img src={completed} alt="quiz done"></img></div>;
    }
    //if(!shuffledAnswers.current)
    //{
        const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
        shuffledAnswers.sort(()=> Math.random()-0.5);    
    //}


    const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer){
        setCurrentAnswerState('answered');
        setAnswer((prevAnswer) =>{
            return [...prevAnswer, selectedAnswer];
        });
        setTimeout(()=>{
            if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
                setCurrentAnswerState('correct');
                console.log("correct" +currentAnswerState);
            }else{
                setCurrentAnswerState('wrong');
                console.log("wrong" +currentAnswerState);
            }
            console.log('setCurrentAnswerstate:' +currentAnswerState);
            setTimeout(()=>{
                setCurrentAnswerState('');
            },4000);
            
        },1000); 
       
    } ,[activeQuestionIndex]); 

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);

    return(
        <div id="quiz">
        <div id="question">
            <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeOut={handleSkipAnswer}/>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
            {shuffledAnswers.map((ans) =>{
                const isSelected = answer[answer.length-1] === ans;
                let cssClass = '';
                if(currentAnswerState === 'answered' && isSelected)
                {
                    cssClass = 'selected';
                }
                if((setCurrentAnswerState === 'correct' || setCurrentAnswerState === 'wrong') && isSelected)
                {
                    console.log('collecting setCurrentAnswerState'+setCurrentAnswerState);
                    cssClass = currentAnswerState;
                }
                return (<li key={ans} className="answer">
                       <button onClick={() => handleSelectAnswer(ans)} className={cssClass}>{ans}</button>
                       </li>
            )}
            )}
        </ul> 
        </div>
        </div>
    );

}