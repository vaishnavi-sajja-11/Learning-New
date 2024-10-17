import {useState,useRef, useEffect} from 'react';
import Input from './Input.jsx';
import LogEntry from './LogEntry.jsx';
import './Todos.css';
import {addNewLog} from '../http.js';
import {deleteExistingLog} from '../http.js';
import {getLogs} from '../http.js';
import { updateLogById } from '../http.js';
import { getLogById } from '../http.js';
import InvalidEntry from './InvalidEntry.jsx';
import EditEntry from './EditEntry.jsx';

export default function Todos(){

    const [entries, setEntries] = useState([]);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [editableEntry , setEditableEntry ] = useState([]);
    const [isEditModelOpen , setIsEditModelOpen] = useState(false);

    const date = useRef();
    const mistake = useRef();
    const lesson = useRef();

    useEffect(()=>{
        async function getExistingLogs(){
            const response = await fetch("http://localhost:8080/getLogs");
            const data = await response.json();
            setEntries(data);
        }
        getExistingLogs();
    },[]);

    async function handleOnclick(e){
    
        e.preventDefault();
        let dateVal = date.current.value;
        let mistakeVal = mistake.current.value;
        let lessonVal = lesson.current.value;

        const currentLog = {
            id: Math.floor(Math.random()*(1000)),
            date: dateVal ,
            mistake: mistakeVal,
            lesson: lessonVal
        };
        const response = await addNewLog(currentLog);
        console.log(response);
    const InvalidInput =  (dateVal === undefined || dateVal === '') || 
    (mistakeVal === undefined || mistakeVal === '') || 
    (lessonVal === undefined || lessonVal === '');
        
        setEntries((prevEntries)=>{
            if(!InvalidInput && (response === 200 || response === 201)){
                return [
                    currentLog
                    ,...prevEntries]
            }
            else{
                setIsModelOpen(true);
                return prevEntries;
            }
            
        });
    }
    function closeModalDilog(){
        isModelOpen && setIsModelOpen(false);
        isEditModelOpen && setIsEditModelOpen(false);
    }
    function onClear(){
        date.current.value=null;
        mistake.current.value=null;
        lesson.current.value=null;
    }
    async function handleDeleteLog(id){
        const response = await deleteExistingLog(id);
        if(response === 200)
            {
                setEntries((prevEntries)=>{
                    //const entry = prevEntries.find((entry)=> id === entry.id);
                    const updatedEntries = prevEntries.filter((entry) => id !== entry.id);
                    console.log(updatedEntries);
                    return updatedEntries;
                }       
            )}
        } 
    function handleEditLog(id){
        const entry = entries.find(entry => id === entry.id);
        setEditableEntry({
                id: entry.id,
                date:entry.date,
                mistake:entry.mistake,
                lesson:entry.lesson
            });
        setIsEditModelOpen(true);
    }
    function handleCloseEdit()
    {
        setIsEditModelOpen(false);
    }
    
    async function handleUpdatedEntry(id, log){
        const data =  await getLogById(id);
        console.log("data recieved from the edit entry" +Object.entries(log));
        if(data.length !==0)
        {
             const status = await updateLogById(id,log);
             if(status === 200)
             {
                 const latestLogs = await getLogs();
                 console.log(latestLogs);
                 setEntries(latestLogs);
             }
        }
     }
    return(
        <> 
            <div className="Todo-entries">
                <Input id="entrydate" label="Date" type="date" ref={date} />
                <Input id="mistakes" label="Mistakes" type="textarea" ref={mistake} />
                <Input id="lessons" label="Lessons" type="textarea" ref={lesson} />
                <button type="submit" onClick={handleOnclick}>Enter</button>
                <button onClick={onClear}>clear</button>
            </div>
            {(entries.length !== 0) ? <LogEntry data={entries} onConfirm={handleDeleteLog} onEdit={handleEditLog}/> : <h2>Your current log is empty..Please enter some logs!</h2>}
            <InvalidEntry isOpen={isModelOpen} onCloseModal={closeModalDilog}/>            
            {Object.entries(editableEntry).length >0 &&
            <EditEntry isOpen={isEditModelOpen} onCloseModal={closeModalDilog} 
            defaultDate={editableEntry.date} 
            defaultId={editableEntry.id}
            defaultMistake={editableEntry.mistake}
            defaultLesson={editableEntry.lesson} 
            onCloseEdit={handleCloseEdit} onUpdateEdit={handleUpdatedEntry}/>}
        </>
    );
}