import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        goingFrom: '',
        goingTo: '',
        noOfPassengers: 1, // Default to 1 passenger
        departureDate: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handlePassengerChange = (amount) => {
        setFormData(prevState => ({
            ...prevState,
            noOfPassengers: Math.min(6, Math.max(1, prevState.noOfPassengers + amount))
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { goingFrom, goingTo, noOfPassengers, departureDate } = formData;

        // Check if all fields are filled
        if (goingFrom && goingTo && noOfPassengers && departureDate) {
            // Redirect to the Rides page
            navigate('/Rides');
        } else {
            // Optionally, show an error message
            alert("Please fill in all fields before searching.");
        }
    };

    return (
        <div className="flex flex-col items-center py-8">
            <form className="flex items-center w-full max-w-4xl gap-4" onSubmit={handleSubmit}>
                <div className="flex-grow">
                    <input
                        type="text"
                        id="goingFrom"
                        value={formData.goingFrom}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Going From"
                        required
                    />
                </div>
                <div className="flex-grow">
                    <input
                        type="text"
                        id="goingTo"
                        value={formData.goingTo}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Going To"
                        required
                    />
                </div>
                <div className="flex-grow flex items-center">
                    <button
                        type="button"
                        onClick={() => handlePassengerChange(-1)}
                        className="bg-gray-200 text-gray-800 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
                    >
                        -
                    </button>
                    <input
                        type="text"
                        id="noOfPassengers"
                        value={formData.noOfPassengers}
                        readOnly
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm text-center w-full p-2.5"
                        style={{ flex: 1 }}
                    />
                    <button
                        type="button"
                        onClick={() => handlePassengerChange(1)}
                        className="bg-gray-200 text-gray-800 border border-gray-300 rounded-r-lg px-4 py-2 focus:outline-none"
                    >
                        +
                    </button>
                </div>
                <div className="flex-grow">
                    <input
                        type="date"
                        id="departureDate"
                        value={formData.departureDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]} // Restrict to current or future dates
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="flex items-center justify-center w-12 h-12 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
            </form>
        </div>
    );
}

export default Search;
