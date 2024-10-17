

export async function getLogs(){
    const response = await fetch("http://localhost:8080/getLogs");
    const data = response.json();
    return data;
}


export async function addNewLog(logDetails){
    const requestOptions ={
        method : 'POST',
        body: JSON.stringify(logDetails),
        headers : {
            'Content-type' : 'application/json'
        }
    }
    const response = await fetch("http://localhost:8080/addLog",requestOptions);
    return response.status;
}

export async function deleteExistingLog(id){
    const response = await fetch(`http://localhost:8080/delete/${id}`,{method : 'DELETE'});
    return response.status;
}

export async function getLogById(id){
    const response = await fetch(`http://localhost:8080/getLogs/${id}`);
    const data = response.json();
    return data;
}
export async function updateLogById(id,log){
    console.log("log recieved from the API in PUT request" ,log);
    const requestOptions = {
        method : 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(log)
    }
    const response = await fetch(`http://localhost:8080/update/${id}`,requestOptions)
    return response.status;
}