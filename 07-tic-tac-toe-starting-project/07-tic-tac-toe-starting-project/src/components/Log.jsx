export default function Log({turnsData}){
    return (
        <>
        {turnsData.map((turn) => (
            <li key={`${turn.square.row}${turn.square.col}`}>
               {turn.player} Selected {turn.square.row},{turn.square.col}
            </li>
        ))}
        </>
    );
}