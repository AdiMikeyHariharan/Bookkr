import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autocomplete } from '@react-google-maps/api';
import Header from './components/Header';
import Footer from './components/Footer';

const RideInfo = () => {
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [pricePerSeat, setPricePerSeat] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [autocompleteFrom, setAutocompleteFrom] = useState(null);
  const [autocompleteTo, setAutocompleteTo] = useState(null);

  useEffect(() => {
    // Set today's date as the minimum allowed date
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('startDate').setAttribute('min', today);
  }, []);

  const onLoadFrom = (autoC) => setAutocompleteFrom(autoC);
  const onLoadTo = (autoC) => setAutocompleteTo(autoC);

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

  const validateForm = () => {
    const newErrors = {};
    if (!leavingFrom) newErrors.leavingFrom = 'Please enter a departure location';
    if (!goingTo) newErrors.goingTo = 'Please enter a destination';
    if (passengers < 1 || passengers > 6) newErrors.passengers = 'Passengers must be between 1 and 6';
    if (!startDate) newErrors.startDate = 'Please enter a starting date';
    if (!startTime) newErrors.startTime = 'Please enter a start time';
    if (!endTime) newErrors.endTime = 'Please enter an end time';
    if (!pricePerSeat || pricePerSeat <= 0) newErrors.pricePerSeat = 'Please enter a valid price per seat';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({
        leavingFrom,
        goingTo,
        passengers,
        startDate,
        startTime,
        endTime,
        pricePerSeat
      });
      alert('Ride published successfully!');
      navigate('/some-success-page'); // Adjust this to your actual success page route
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
      
      <main className="flex-grow flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-12" style={{ marginTop: '2rem' }}>
          Ride Information
        </h1>
        <div className="wrapper3 flex flex-col items-center justify-center">
          <div className="flip-card__front">
            <form className="flip-card__form" onSubmit={handleSubmit}>
              <Autocomplete onLoad={onLoadFrom} onPlaceChanged={handlePlaceChangedFrom}>
                <input
                  type="text"
                  value={leavingFrom}
                  onChange={(e) => setLeavingFrom(e.target.value)}
                  placeholder="Departure location"
                  className="flip-card__input"
                  onKeyDown={handleKeyDown}
                />
              </Autocomplete>
              {errors.leavingFrom && <p className="text-red-500">{errors.leavingFrom}</p>}
              <Autocomplete onLoad={onLoadTo} onPlaceChanged={handlePlaceChangedTo}>
                <input
                  type="text"
                  value={goingTo}
                  onChange={(e) => setGoingTo(e.target.value)}
                  placeholder="Destination location"
                  className="flip-card__input"
                  onKeyDown={handleKeyDown}
                />
              </Autocomplete>
              {errors.goingTo && <p className="text-red-500">{errors.goingTo}</p>}
              <input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Start date"
                className="flip-card__input"
              />
              {errors.startDate && <p className="text-red-500">{errors.startDate}</p>}
              <input
                type="text" // Changed to text input
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                placeholder="Start time (HH:MM)"
                className="flip-card__input"
                onKeyDown={handleKeyDown}
              />
              {errors.startTime && <p className="text-red-500">{errors.startTime}</p>}
              <input
                type="text" // Changed to text input
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                placeholder="End time (HH:MM)"
                className="flip-card__input"
                onKeyDown={handleKeyDown}
              />
              {errors.endTime && <p className="text-red-500">{errors.endTime}</p>}
              <input
                type="number"
                value={pricePerSeat}
                onChange={(e) => setPricePerSeat(parseFloat(e.target.value))}
                min={0}
                placeholder="Price per seat"
                className="flip-card__input"
              />
              {errors.pricePerSeat && <p className="text-red-500">{errors.pricePerSeat}</p>}
              <button
                type="submit"
                className="flip-card__btn transition-all duration-200 bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none w-full max-w-md"
              >
                Publish Ride
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RideInfo;
