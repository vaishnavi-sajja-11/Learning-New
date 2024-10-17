import ProjectInput from "./ProjectInput";
import {useRef} from 'react';
import Modal from './Modal';

export default function Input({onAdd, onCacel}){
    const projectTitle = useRef();
    const projectDescription = useRef();
    const projectDuedate = useRef();
    const dialogRef = useRef();
    function handleSave(){
        const enteredTitle = projectTitle.current.value;
        const enteredDesc = projectDescription.current.value;
        const enteredDuedate = projectDuedate.current.value;
        if(enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredDuedate.trim() === '' )
        {
            dialogRef.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            description: enteredDesc,
            dueDate : enteredDuedate
        });
    }
    return(
        <>
        <Modal ref={dialogRef}>
            <h2>Invalid input!</h2>
            <p>Oopps... looks like you have entered an invalid value</p>
            <p>Please enter a valid value</p>
        </Modal>
        <div className="w-[35-rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
            <button className="text-stone-800 hover:text-stone-950" onClick={onCacel}>Cancel</button>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button>

            </menu>
            <div>
            <ProjectInput identifier="title" label="title" ref={projectTitle}/> 
            <ProjectInput identifier="description" label="Description" textArea ref={projectDescription}/> 
            <ProjectInput identifier="duedate" label="Due date" ref={projectDuedate} type="date"/> 
            </div>

        </div>
        </>
    );
}