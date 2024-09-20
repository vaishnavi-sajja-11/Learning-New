import { formatter } from "../util/investment";
export default function Result({results}){

       
    console.log("Results component" , results)
    
    return (
        <>
        <table id="result">
            <tbody>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(Year)</th>
                <th>TotalInterest</th>
                <th>InvestedCapital</th>
            </tr>
            {
                 results.map((entry) =>{
                    const totalInterest = (entry.valueEndOfYear)-(entry.annualInvestment*entry.year);

                    return(
                       <tr key={entry.year}>
                       <td>{entry.year}</td>
                       <td>{formatter.format(entry.valueEndOfYear)}</td>
                       <td>{formatter.format(entry.interest)}</td>
                       <td>{formatter.format(totalInterest)}</td>
                       <td>{formatter.format(entry.annualInvestment)}</td>
                   </tr>
                    )
                 })

            }
            </tbody>
            
        </table>
        </>
    );
}