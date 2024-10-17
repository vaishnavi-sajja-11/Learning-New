import {forwardRef,useImperativeHandle,useRef} from 'react';
import { createPortal } from "react-dom";

const Modal = forwardRef(({children},ref)=>{
    const dialog = useRef();
    
    useImperativeHandle(ref, () =>({ 
        open(){
            if(dialog.current)
            {
                dialog.current.showModal();
            }
            else
            {
                console.log("dialog is not correctly forwarded");
            }
        }
    }));
    return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">{children}
    <form method="dialog" className="mt-4 text-right">
        <button className="text-stone-800 hover:text-stone-950">Close</button>
    </form>
    </dialog>, 
    document.getElementById('modal-root'));
});

export default Modal;