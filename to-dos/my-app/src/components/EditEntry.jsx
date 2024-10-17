import {useState} from 'react';
import Modal from './Modal.jsx';

export default function EditEntry({defaultId,defaultMistake,defaultLesson,defaultDate,onCloseEdit,onUpdateEdit,isOpen,onCloseModal}){
    const [currentDate, setCurrentDate] = useState(defaultDate);
    const [currentMistake, setCurrentMistake] = useState(defaultMistake);
    const [currentLesson , setCurrentLesson] = useState(defaultLesson);
    const [isDiabled, setIsDisabled] = useState(true);

    function onChangeforDate(e){
        setCurrentDate(e.target.value);
        setIsDisabled(false);
    }
    function onChangeforMistake(e){
        setCurrentMistake(e.target.value);
        setIsDisabled(false);
    }
    function onChangeforLesson(e){
        setCurrentLesson(e.target.value);
        setIsDisabled(false);
    }

    return(
        <>
        <Modal open={isOpen} onClose={onCloseModal}>
        <label>Date: <input id="entrydate"  type="date"  max={new Date().toISOString().split('T')[0]} value={currentDate} onChange={onChangeforDate}/></label>
        <label>Mistakes:<textarea id="mistakes"  type="textarea" value={currentMistake} onChange={onChangeforMistake}/></label>
        <label>Lessons: <textarea id="lessons"  type="textarea"  value={currentLesson} onChange={onChangeforLesson}/></label>
        <button type="submit" onClick={onCloseEdit}>Close</button>
        {isDiabled ? <button type="submit" disabled>Update</button> : <button type="submit" onClick={()=>{onUpdateEdit(defaultId,{
            date : currentDate,
            mistake : currentMistake,
            lesson : currentLesson
        })}}>Update</button>}
        </Modal>
        </>
    );


}