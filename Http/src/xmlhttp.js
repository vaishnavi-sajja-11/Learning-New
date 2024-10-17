import axios from "axios";

// //export async function getUserPlaces(){

//     const xhr = new XMLHttpRequest();
//     xhr.open('GET','http://localhost:3000/places',false);
//     xhr.send();
//     xhr.onreadystatechange(()=>{
//         console.log('request initiated');
//         if(xhr.readyState === 4)
//         {
//             console.log(xhr.response.json());
//         }
//     })

// } *//
export async function fetchUserPlaces(){

    const response =  await fetch('http://localhost:3000/places');
    const resData = await response.json();
    console.log(resData.places);
}

export async function axiosUserPlaces(){
    const response = await axios.get('http://localhost:3000/places');
    console.log(response.data.places);
}
console.log("executing xhr");
//axiosUserPlaces();

const requestOptions = {
    method:"PUT",
    body: "something",
    headers : {
        'Content-type' : 'application/json'
    }
}
export async function axiosPutUserDetails(){
    try{
        const response = await axios("http://localhost:3000/user-places",requestOptions);
        console.log(response);
        if(response.status !== 200)
        {
            throw new Error ('the request is wrong');
        }
    }catch(error)
    {
        console.log('error occured'+error)
        if(error instanceof AggregateError)
        {
            error.errors.forEach(err => {
                console.error(err)
            });
        }
    }

}
axiosPutUserDetails();

