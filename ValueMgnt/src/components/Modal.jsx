import { forwardRef , useImperativeHandle, useRef} from "react";
import {createPortal} from 'react-dom';


const Modal = forwardRef(({result,remainingTime,targetTime,onReset},ref)=>{
    const formattedTime = (remainingTime/1000).toFixed(2);
    const dialog = useRef();
    const userLost = remainingTime <=0;
    const score = Math.round((1-remainingTime/targetTime*1000)*100);
    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    });
    return createPortal(<dialog ref={dialog} className="result-modal" onClose={onReset}>
        {userLost ? <h2>You lost!</h2> : <h2>You won!</h2>}
        {!userLost && <h2>Your Score {score}</h2>}
        <p>The target time was <strong>{targetTime}</strong></p>
        <p>You stopped timer at <strong>{formattedTime} seconds left</strong></p>
        <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
        </form>
        </dialog>,document.getElementById("modal"));
});

export default Modal;