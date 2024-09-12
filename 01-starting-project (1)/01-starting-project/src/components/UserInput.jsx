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
    function handleChange(inputIdentifier, inputValue){
        
        setUserInput(prevUserInput =>{
            return{
                ...prevUserInput, 
                [inputIdentifier] :inputValue
            };
        })
    }
    let data = calculateInvestmentResults({...userInput});
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
    <Result results={data}/>

    </>
    );
    
}


export default UserInput;