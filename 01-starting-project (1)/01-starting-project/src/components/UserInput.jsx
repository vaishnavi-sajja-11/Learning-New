import {useState} from 'react';
import {calculateInvestmentResults} from '../util/investment.js';
import Result from "./Result"


const INPUT = {
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 12,
};
function UserInput(){

    const [ userInput , setUserInput ] = useState(INPUT);
    const [ resultData, setResultData ] = useState(calculateInvestmentResults({...userInput}));
    function handleChange(inputIdentifier, inputValue){
        
        setUserInput(prevUserInput =>{
            return{
                ...prevUserInput, 
                [inputIdentifier] : +inputValue
            };

        })
        setResultData(calculateInvestmentResults({...userInput}));
       
    }
    const inputValid = userInput.duration > 0;

    return (
    <>
    <form id = 'user-input'> 
    <div id ='input-group'>
        <p>
            <label>Initial Investment</label>
                <input type="number" required 
                value={userInput.initialInvestment}
                onChange={(e) => handleChange ('initialInvestment', e.target.value)}></input>
        </p>
        <p>
            <label>Annual Investment</label>
                <input type="number" required 
                value={userInput.annualInvestment}
                onChange={(e) => handleChange("annualInvestment",e.target.value)}></input>
        </p>
        <p>
            <label>Expected Return</label>
                <input type="number" required 
                value={userInput.expectedReturn}
                onChange={(e) => handleChange("expectedReturn",e.target.value)}></input>
        </p>
        <p>
            <label>Duration</label>
                <input type="number" required 
                value ={userInput.duration}
                onChange={(e) => handleChange("duration",e.target.value)}></input>
        </p>
    </div>
    </form>
    {!inputValid && <p>Duration must be greater than zero (0)</p>}
    {inputValid && <Result results={resultData}/>  }

    </>
    );
    
}


export default UserInput;