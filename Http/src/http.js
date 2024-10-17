export async function dataExtract(){
        const response = await fetch("http://localhost:3000/places");
        const data = await response.json();
        if(!response.ok){
          throw new Error ('the data is not loaded correctly');
        }
    return data.places;
    
}

export async function updateusePlace(places){
  const requestOption = {
    method: 'PUT',
    headers : {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({places})
  }
      const response = await fetch('http://localhost:3000/user-places', requestOption );
      const resData = await response.json();
      if(!response.ok)
      {
        throw new Error ("the put request is not successful");
      }
      return resData.message;
}

export async function fetchUserPlaces(){
  const response = await fetch("http://localhost:3000/user-places");
  const data = await response.json();
  if(!response.ok){
    throw new Error ('the data is not fetched correctly');
  }
return data.places;

}
