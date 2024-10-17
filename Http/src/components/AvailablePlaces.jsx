import {useState,useEffect} from 'react';
import Places from './Places.jsx';
import ErrorPage from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import {dataExtract} from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {

  const [isFetching, setIsFetching ] = useState(false);
  const [ availabelPlaces, setAvailablePlaces] = useState([]);
  const [error , setError] = useState();
  //how to send http requests 
  // useEffect(()=>{
  //   fetch('http://localhost:3000/places').then((response)=>{
  //     return response.json();
  //   }).then((resData)=>{
  //     setAvailablePlaces(resData.places);
  //   });

  // },[]);
  useEffect(() =>{
    async function fetchPlaces(){
      setIsFetching(true);
      try{
        const places = await dataExtract();
        navigator.geolocation.getCurrentPosition((position) =>{
        const sortedPlaces = sortPlacesByDistance(places,position.coords.latitude,position.coords.longitude);
        setAvailablePlaces(sortedPlaces);
        setIsFetching(false);
        });
       
      }
      catch(error){
        setError({
          message: error.message || 'Unable to fetch available places , please retry ..!'
        });
        setIsFetching(false);
      }

    }
    fetchPlaces();
  },[]);
  if(error)
  {
    return <ErrorPage title="error occured" message={error.message}></ErrorPage>;
  }
  return (
    <Places
      title="Available Places"
      places={availabelPlaces}
      isLoading={isFetching}
      loadingText = "fetching places .. please wait.."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
