import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';

const Rides = () => {
    const location = useLocation();
    const formValues = location.state || {};

    return (
        <div>
            <Header /> 
            <div className="pt-16"> {/* Add padding top to account for the fixed header */}
                <form className="flex items-center w-3/4 mt-10 mx-auto"> {/* Adjusted class here */}
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <input 
                            type="text" 
                            id="goingFrom" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Going From" 
                            value={formValues.goingFrom || ''}
                            readOnly
                        />
                    </div>
                    <div className="relative w-full">
                        <input 
                            type="text" 
                            id="goingTo" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Going To" 
                            value={formValues.goingTo || ''}
                            readOnly
                        />
                    </div>
                    <div className="relative w-full">
                        <input 
                            type="text" 
                            id="noOfPassengers"  // Change this to match the key in Search.jsx
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="No of Passengers" 
                            value={formValues.noOfPassengers || ''}
                            readOnly
                        />
                    </div>
                    <div className="relative w-full">
                        <input 
                            type="date" 
                            id="departureDate" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={formValues.departureDate || ''}
                            readOnly
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Rides;
