import { useState } from "react";


const Button=(props)=>{
    const [data, setData] = useState(null);
    function submitForm(){
        const xhr = new XMLHttpRequest();
        xhr.open('GET','http://localhost:8080/users');
        xhr.onload =()=>{
            if(xhr.status == 200)
            {
                setData(JSON.parse(xhr.responseText));
            }
        };
        xhr.send();
    }
    return(
        <>
                <button type="button" className='Submit' onClick={submitForm}>{props.action}</button>
                {data ? <div>{JSON.stringify(data)}</div> : <div> Loading... </div>}
        </>
    );
}

export default Button;