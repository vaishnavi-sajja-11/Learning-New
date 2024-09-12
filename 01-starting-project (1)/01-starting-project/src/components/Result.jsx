
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
                 results.map((entry) =>(
                    <tr key={entry.year}>
                       <td>{entry.year}</td>
                       <td>{entry.year}</td>
                       <td>{entry.interest}</td>
                       <td>{entry.valueEndOfYear}</td>
                       <td>{entry.annualInvestment}</td>
                   </tr>
                 ))
            }
            </tbody>
            
        </table>
        </>
    );
}