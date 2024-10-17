import { forwardRef } from "react";

const Input = forwardRef(function Input({id,label,type},ref){
    const today = new Date().toISOString().split('T')[0];
    return(
        <div className="entry">
            <label htmlFor={id}>{label}
            {type === 'textarea' && <textarea ref={ref} id={id} placeholder="Please enter your input" /> } 
            {type === 'date' && <input id={id} type={type} ref={ref} max={today}></input>}
           </label>
        </div>
        
    );
});

export default Input;