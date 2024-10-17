import { forwardRef } from "react";


const ProjectInput = forwardRef(function ProjectInput({identifier ,label, textArea ,...props},ref,){
    const styles = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    return (
        <p className="flex flex-col gap-1 my-6 w-80">
        <label className="text-sm font-bold uppercase text-stone-500" htmlFor={identifier}>{label}</label>
        {textArea? <textarea ref={ref} className={styles} {...props}/> : <input ref={ref} className={styles} {...props}/>}
        </p>
    );
});

export default ProjectInput;