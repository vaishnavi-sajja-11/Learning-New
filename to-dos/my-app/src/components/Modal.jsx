import {useRef, useEffect} from 'react';
import './Modal.css';

export default function Modal({onClose,open,children}){
    const dialog = useRef();
    useEffect(()=>{
        if(open){
            dialog.current.showModal();
        }
        else
        {
            dialog.current.close();
        }
    },[open]);
    return(
        <>
        <dialog ref={dialog} onClose={onClose} className='modal'>
            <form method="dialog" >
            {children}
            </form>
        </dialog>
        </>
    );
}


