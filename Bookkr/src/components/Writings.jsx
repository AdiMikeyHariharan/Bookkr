import React from 'react';
import {ReactTyped} from 'react-typed';

const Writings = () => {
    return (
        <div className="container w-4/5 mx-auto translate-y-10 bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg shadow-lg">
  <ul className="text-sm font-medium text-gray-800 sm:flex sm:space-x-8">
    <li className="w-full mb-6 sm:mb-0">
      <div className="flex items-start space-x-4">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true"
          className="h-8 w-8 text-blue-500"
        >
          <g color="neutralIconDefault">
            <g color="currentColor">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8.5 5v2.5h8V5zM7 4.5v3H6a1 1 0 0 0-1 1v3H4a1 1 0 0 0-1 1V16a1 1 0 0 0 1 1h1v3a1 1 0 0 0 1 1h9.5a5.5 5.5 0 0 0 .5-10.978V9h1a1 1 0 0 0 1-1V4.5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1m7.5 5.59V9h-8v2.5h5.225a5.5 5.5 0 0 1 2.775-1.41M10.6 13H4.5v2.5H10c0-.9.216-1.75.6-2.5m-.393 4H6.5v2.5h5.225a5.5 5.5 0 0 1-1.518-2.5m9.293-1.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
                clipRule="evenodd"
              ></path>
            </g>
          </g>
        </svg>
        <div className="flex-1">
          <ReactTyped
            strings={[
              "<span class='font-bold'>      Your pick of rides at lowest prices</span><br/><br/>&emsp;No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.",
            ]}
            typeSpeed={10}
            className="text-black"
            contentType={'html'}
          />
        </div>
      </div>
    </li>
    <li className="w-full mb-6 sm:mb-0">
      <div className="flex items-start space-x-4">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true"
          className="h-8 w-8 text-green-500"
        >
          <g color="neutralIconDefault">
            <g color="currentColor">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M20 5.5H4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
                clipRule="evenodd"
              ></path>
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13.5 15.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75M13.5 12a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75M13.5 8.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75M8.875 10.25a.75.75 0 0 0-1.5 0v2.531c-.662.29-1.125.95-1.125 1.719v.5H5v-.5c0-1.077.544-2.026 1.373-2.588a2.25 2.25 0 1 1 3.504 0A3.12 3.12 0 0 1 11.25 14.5v.5H10v-.5c0-.769-.463-1.43-1.125-1.719z"
                clipRule="evenodd"
              ></path>
            </g>
          </g>
        </svg>
        <div className="flex-1">
          <ReactTyped
            strings={[
              "<span class='font-bold'>      Trust who you travel with</span><br/><br/>&emsp;We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.",
            ]}
            typeSpeed={10}
            className="text-black"
            contentType={'html'}
          />
        </div>
      </div>
    </li>
    <li className="w-full">
      <div className="flex items-start space-x-4">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true"
          className="h-8 w-8 text-red-500"
        >
          <g color="neutralIconDefault">
            <g color="currentColor">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.5 11.5V5.958L7.52 12.5h3.98v5.542l4.98-6.542zm5.999-1.498a.5.5 0 0 1 .398.801l-8.45 11.098a.25.25 0 0 1-.449-.151v-7.752H5.501a.5.5 0 0 1-.398-.801l8.45-11.098a.25.25 0 0 1 .449.151v7.752z"
                clipRule="evenodd"
              ></path>
            </g>
          </g>
        </svg>
        <div className="flex-1">
          <ReactTyped
            strings={[
              "<span class='font-bold'>    Scroll, click, tap and go!</span><br/><br/>&emsp;Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.",
            ]}
            typeSpeed={10}
            className="text-black"
            contentType={'html'}
          />
        </div>
      </div>
    </li>
  </ul>
</div>

    );
}

export default Writings;
