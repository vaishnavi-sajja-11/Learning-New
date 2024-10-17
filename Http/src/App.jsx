import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import {updateusePlace}  from './http.js';
import ErrorPage from './components/Error.jsx';
import {fetchUserPlaces} from './http.js';

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [errorUpdatingPlaces , setErrorUpdatingPlaces] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error , setError] = useState();
  const [isFetching, setIsFetching ] = useState(false);

  useEffect(()=>{
    async function fetchPlaces(){
      setIsFetching(true);
      try{
        const places =  await fetchUserPlaces();
        setUserPlaces(places);
      }catch(err){
        setError({
          message : err.message || 'Error loading the user places'
        });
      }
      setIsFetching(false);
    }
    fetchPlaces();
  },[]);
  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
    try{
      await updateusePlace([selectedPlace,...userPlaces]);
    }catch(error)
    {
      console.log(error);
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({
        message : error.message || 'troble adding selected places to the list',
      })
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );
    try{
      await updateusePlace(userPlaces.filter((place)=>place.id !== selectedPlace/current.id));
    }catch(error)
    {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({
        message: error.message || 'failed to delete the place .. please try again!'
      })
    }
    setModalIsOpen(false);
  }, [userPlaces]);
  function handleError(){
    setErrorUpdatingPlaces(null);
  }
  return (
    <>
      <Modal open={errorUpdatingPlaces}>
        {errorUpdatingPlaces && (<ErrorPage title="Technical error while loding the selected places" 
        message={errorUpdatingPlaces.message} onConfirm={handleError} onClose={handleError}>
        </ErrorPage>)}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && <ErrorPage title="Error fetching user places..." message={error.message}></ErrorPage>}
        {!error &&<Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          loadingText="fetching teh places... "
          isLoading={isFetching}
          onSelectPlace={handleStartRemovePlace}
        />}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
