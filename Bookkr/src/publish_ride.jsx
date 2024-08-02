import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { FaUsers } from 'react-icons/fa';
import Header from './components/Header';
import Footer from './components/Footer';
import Stats from './components/Stats';
import Feature from './components/Feature';

const PublishRideCard = () => {
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [passengers, setPassengers] = useState(1); // Default to 1 passenger
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Become a Bookr driver', 'Share your ride', 'Save on travel costs'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-white to-blue-500">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">
          <span ref={typedElement} />
        </h1>
        <div className="wrapper flex flex-col items-center justify-center">
          <div className="flip-card__front">
            <h2 className="title">Publish a Ride</h2>
            <form className="flip-card__form">
              <input
                type="text"
                value={leavingFrom}
                onChange={(e) => setLeavingFrom(e.target.value)}
                placeholder="Leaving from..."
                className="flip-card__input"
              />
              <input
                type="text"
                value={goingTo}
                onChange={(e) => setGoingTo(e.target.value)}
                placeholder="Going to..."
                className="flip-card__input"
              />
              <div className="flex items-center">
                <FaUsers className="text-gray-500 mr-2" />
                <input
                  type="number"
                  value={passengers}
                  onChange={(e) => setPassengers(parseInt(e.target.value, 10))}
                  min={1}
                  placeholder="1 passenger"
                  className="flip-card__input w-20"
                />
              </div>
            </form>
            <button className="flip-card__btn transition-all duration-200 bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none w-full max-w-md">
              Publish a ride
            </button>
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
