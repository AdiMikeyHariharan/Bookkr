import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';

const Search = () => {
    const navigate = useNavigate();
    const today = new Date().toISOString().split('T')[0];
    const [autocompleteFrom, setAutocompleteFrom] = useState(null);
    const [autocompleteTo, setAutocompleteTo] = useState(null);

    const onLoadFrom = (autoC) => setAutocompleteFrom(autoC);
    const onLoadTo = (autoC) => setAutocompleteTo(autoC);

    const handlePlaceChangedFrom = () => {
        if (autocompleteFrom) {
            const place = autocompleteFrom.getPlace();
            if (place.formatted_address) {
                setFormData(prevState => ({
                    ...prevState,
                    goingFrom: place.formatted_address
                }));
            }
        }
    };

    const handlePlaceChangedTo = () => {
        if (autocompleteTo) {
            const place = autocompleteTo.getPlace();
            if (place.formatted_address) {
                setFormData(prevState => ({
                    ...prevState,
                    goingTo: place.formatted_address
                }));
            }
        }
    };

    const [formData, setFormData] = useState({
        goingFrom: '',
        goingTo: '',
        noOfPassengers: 1,
        departureDate: today
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handlePassengerChange = (value) => {
        const numValue = parseInt(value, 10);
        if (numValue >= 1 && numValue <= 6) {
            setFormData(prevState => ({
                ...prevState,
                noOfPassengers: numValue
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { goingFrom, goingTo, noOfPassengers, departureDate } = formData;

        if (goingFrom && goingTo && noOfPassengers && departureDate) {
            navigate('/Rides', { state: formData });
        } else {
            alert("Please fill in all fields before searching.");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission on Enter key press inside autocomplete inputs
        }
    };

    return (
        <div className="pt-2">
            <form className="flex items-center w-3/4 mt-1 mx-auto" onSubmit={handleSubmit}>
                <div className="relative w-full">
                    <Autocomplete
                        onLoad={onLoadFrom}
                        onPlaceChanged={handlePlaceChangedFrom}
                    >
                        <input
                            type="text"
                            id="goingFrom"
                            value={formData.goingFrom}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Going From"
                            required
                        />
                    </Autocomplete>
                </div>
                
                <div className="relative w-full">
                    <Autocomplete
                        onLoad={onLoadTo}
                        onPlaceChanged={handlePlaceChangedTo}
                    >
                        <input
                            type="text"
                            id="goingTo"
                            value={formData.goingTo}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Going To"
                            required
                        />
                    </Autocomplete>
                </div>

                <div className="relative w-full flex items-center">
                    <FaUsers className="text-gray-500 absolute left-3" />
                    <input
                        type="number"
                        id="noOfPassengers"
                        value={formData.noOfPassengers}
                        onChange={(e) => handlePassengerChange(e.target.value)}
                        min="1"
                        max="6"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1 passenger"
                    />
                </div>

                <div className="relative w-full">
                    <input
                        type="date"
                        id="departureDate"
                        value={formData.departureDate}
                        onChange={handleChange}
                        min={today}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Today"
                        required
                    />
                </div>

                <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
            </form>
        </div>
    );
};

export default Search;