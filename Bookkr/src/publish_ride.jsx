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
      strings: [
        'Become a Bookr driver', 
        'Share your ride', 
        'Save on travel costs'
      ],
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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow text-center py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 font-sans">
          <span ref={typedElement} />
        </h1>
        <div className="flex flex-wrap justify-center items-start space-x-10 mt-10">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="leavingFrom">
                Leaving from
              </label>
              <input
                type="text"
                id="leavingFrom"
                value={leavingFrom}
                onChange={(e) => setLeavingFrom(e.target.value)}
                placeholder="Leaving from..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="goingTo">
                Going to
              </label>
              <input
                type="text"
                id="goingTo"
                value={goingTo}
                onChange={(e) => setGoingTo(e.target.value)}
                placeholder="Going to..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6 flex items-center">
              <FaUsers className="text-gray-500 mr-2" />
              <input
                type="number"
                id="passengers"
                value={passengers}
                onChange={(e) => setPassengers(parseInt(e.target.value, 10))}
                min={1}
                placeholder="1 passenger"
                className="w-20 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-full bg-blue-900 text-white py-3 rounded-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-lg">
              Publish a ride
            </button>
          </div>
          <div className="hidden lg:block mt-12">
            <img
              src='/src/assets/carpool-concept-illustration_114360-9238.avif'
              alt="Carpool concept illustration"
              className="max-w-xs rounded-lg shadow-lg"
            />
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
