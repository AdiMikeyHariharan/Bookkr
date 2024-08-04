import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typed from 'typed.js';
import { FaUsers } from 'react-icons/fa';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Stats from './components/Stats';
import Feature from './components/Feature';
import { Autocomplete } from '@react-google-maps/api';

import axios from 'axios'


const PublishRideCard = () => {
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [errors, setErrors] = useState({});
  const [profileImage,setprofileImage] = useState(null)
  const navigate = useNavigate();
  const typedElement = useRef(null);
  const [autocompleteFrom, setAutocompleteFrom] = useState(null);
  const [autocompleteTo, setAutocompleteTo] = useState(null);

  const getImage = async() =>{
    try{

      const response = await axios.get("http://localhost:8080/checkuser",{withCredentials:true});
      const image = response.data.image;
      const permitted = response.data.permitted;
      const username = response.data.username;
      setprofileImage(image)
    }
    catch (err){
      navigate('/Registration')
    }
  }
  useEffect(() => {
    const options = {
      strings: ['Become a Bookr driver', 'Share your ride', 'Save on travel costs'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);
    getImage();
    return () => {
      typed.destroy();
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!leavingFrom) newErrors.leavingFrom = 'Please enter a departure location';
    if (!goingTo) newErrors.goingTo = 'Please enter a destination';
    if (passengers < 1 || passengers > 6) newErrors.passengers = 'Passengers must be between 1 and 6';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceChangedFrom = () => {
    if (autocompleteFrom) {
      const place = autocompleteFrom.getPlace();
      if (place.formatted_address) {
        setLeavingFrom(place.formatted_address);
      }
    }
  };

  const handlePlaceChangedTo = () => {
    if (autocompleteTo) {
      const place = autocompleteTo.getPlace();
      if (place.formatted_address) {
        setGoingTo(place.formatted_address);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/ride_info', { state: { leavingFrom, goingTo, passengers } });
    } else {
      alert('Please fill in all fields correctly before publishing.');
    }
  };

  const handleKeyDown = (e) => {
    // Prevent form submission when pressing Enter key inside autocomplete input
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-white to-blue-500">
      <Header url={profileImage}/>
      <main className="flex-grow flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">
          <span ref={typedElement} />
        </h1>
        <div className="wrapper2 flex flex-col items-center justify-center">
          <div className="flip-card__front">
            <h2 className="title">Publish a Ride</h2>
            <form className="flip-card__form" onSubmit={handleSubmit}>
              <Autocomplete onLoad={setAutocompleteFrom} onPlaceChanged={handlePlaceChangedFrom}>
                <input
                  type="text"
                  value={leavingFrom}
                  onChange={(e) => setLeavingFrom(e.target.value)}
                  placeholder="Leaving from..."
                  className="flip-card__input"
                  onKeyDown={handleKeyDown}
                />
              </Autocomplete>
              {errors.leavingFrom && <p className="text-red-500">{errors.leavingFrom}</p>}
              <Autocomplete onLoad={setAutocompleteTo} onPlaceChanged={handlePlaceChangedTo}>
                <input
                  type="text"
                  value={goingTo}
                  onChange={(e) => setGoingTo(e.target.value)}
                  placeholder="Going to..."
                  className="flip-card__input"
                  onKeyDown={handleKeyDown}
                />
              </Autocomplete>
              {errors.goingTo && <p className="text-red-500">{errors.goingTo}</p>}
              <div className="flex items-center">
                <FaUsers className="text-gray-500 mr-2" />
                <input
                  type="number"
                  value={passengers}
                  onChange={(e) => setPassengers(parseInt(e.target.value, 10))}
                  min={1}
                  max={6}
                  placeholder="1 passenger"
                  className="flip-card__input w-20"
                />
              </div>
              {errors.passengers && <p className="text-red-500">{errors.passengers}</p>}
              <button
                type="submit"
                className="flip-card__btn transition-all duration-200 bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none w-full max-w-md"
              >
                Publish a ride
              </button>
            </form>
          </div>
        </div>
        <Stats />
        <Feature />
      </main>
      <Footer />
    </div>
  );
};

export default PublishRideCard;
