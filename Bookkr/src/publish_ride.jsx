import React, { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import Header from './components/Header';
import Footer from './components/Footer';
import Stats from './components/Stats';
import Feature from './components/Feature';
const PublishRideCard = () => {
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [passengers, setPassengers] = useState(1); // Default to 1 passenger

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex justify-start items-start pt-20 px-10 mr-9"> {/* Add px-10 for left and right padding */}
        <div className="bg-white rounded-lg shadow-2xl p-6" style={{ maxWidth: '400px', marginTop: '100px',marginLeft: '400px', marginBottom: '50px' }}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="leavingFrom">
              Leaving from
            </label>
            <input
              type="text"
              id="leavingFrom"
              value={leavingFrom}
              onChange={(e) => setLeavingFrom(e.target.value)}
              placeholder="Leaving from..."
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="goingTo">
              Going to
            </label>
            <input
              type="text"
              id="goingTo"
              value={goingTo}
              onChange={(e) => setGoingTo(e.target.value)}
              placeholder="Going to..."
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 flex items-center">
            <FaUsers className="text-gray-500 mr-25" />
            <input
              type="number"
              id="passengers"
              value={passengers}
              onChange={(e) => setPassengers(parseInt(e.target.value, 10))}
              placeholder="1 passenger"
              className="w-24 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-700">
            Publish a ride
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center "style={{marginTop: '150px',marginRight:'200px'}}>
          <img
            src='/src/assets/carpool-concept-illustration_114360-9238.avif'
            alt="Carpool concept illustration"
            className="max-w-xs rounded-lg" 
          />
        </div>
      </div>
      <Stats/>
      <Feature/>
      <Footer />
    </div>
  );
};

export default PublishRideCard;
