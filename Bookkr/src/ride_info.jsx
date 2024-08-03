import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const RideInfo = () => {
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [passengers, setPassengers] = useState(1); // Default to 1 passenger
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [pricePerSeat, setPricePerSeat] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
      // Perform the action to publish the ride with all details
      console.log({
        leavingFrom,
        goingTo,
        passengers,
        startDate,
        startTime,
        endTime,
        pricePerSeat
      });
      // Navigate to the next page or show a success message
      alert('Ride published successfully!');
      navigate('/some-success-page'); // Adjust this to your actual success page route
    } else {
      alert('Please fill in all fields correctly before publishing.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-white to-blue-500">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-12" style={{ marginTop: '2rem' }}>
          Ride Information
        </h1>
        <div className="wrapper3 flex flex-col items-center justify-center">
          <div className="flip-card__front">
            <form className="flip-card__form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={leavingFrom}
                onChange={(e) => setLeavingFrom(e.target.value)}
                placeholder="Starting point"
                className="flip-card__input"
              />
              {errors.leavingFrom && <p className="text-red-500">{errors.leavingFrom}</p>}
              <input
                type="text"
                value={goingTo}
                onChange={(e) => setGoingTo(e.target.value)}
                placeholder="Dropping point"
                className="flip-card__input"
              />
              {errors.goingTo && <p className="text-red-500">{errors.goingTo}</p>}
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Starting date"
                className="flip-card__input"
              />
              {errors.startDate && <p className="text-red-500">{errors.startDate}</p>}
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                placeholder="Start time"
                className="flip-card__input"
              />
              {errors.startTime && <p className="text-red-500">{errors.startTime}</p>}
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                placeholder="End time"
                className="flip-card__input"
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
