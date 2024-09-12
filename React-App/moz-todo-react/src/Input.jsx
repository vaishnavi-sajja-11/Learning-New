import {React} from "react";



function Input(props){
    return(
        <>
        <form id="form-input">
            <lable>Username: <input type="text" id="name" value={props.username}/></lable><br></br>
            <lable>id:<input id="id" type="number" value={props.id}></input></lable><br></br>
            <label>birthdate<input id="birthdate" type="text" value={props.birthdate}></input></label>
        </form>
        </>
    );
}
export default Input;