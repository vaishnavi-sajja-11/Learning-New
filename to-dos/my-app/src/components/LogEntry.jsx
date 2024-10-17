import './LogEntry.css';

export default function LogEntry({data,onConfirm,onEdit}){
    return(
        
        <>
        <div className='grid-container'>
                {data.map((entry)=>{
                    return(
                        <div className="item" key={entry.id}>
                            <p>Date    : {entry.date}</p>
                            <p>Mistakes: {entry.mistake.length >10 ? `${entry.mistake.slice(0,10)}...`:entry.mistake}</p>
                            <p>Lessons : {entry.lesson.length >10 ? `${entry.lesson.slice(0,10)}...`: entry.lesson}</p>
                            <button id="close" onClick={()=>{onConfirm(entry.id)}}>Delete</button>
                            <button id="edit" onClick={()=>{onEdit(entry.id)}}>Edit</button>
                        </div>
                    )
                })}
        </div>
        </>
    );
}