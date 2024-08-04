import React from 'react';

export default function Jumbo() {
  return (
    <div>
      <section className="bg-gradient-to-r from-white to-blue-500">
        <div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-24">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl">
            We connect your journey's possibilities
          </h1>
          <p className="mb-10 text-xl font-normal ext-gray-500 dark:text-gray-400 lg:text-2xl sm:px-16 lg:px-48">
            At Bookkr, we simplify travel by connecting drivers and riders. Find the perfect match for a smooth and enjoyable journey.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-lg font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-200 transform hover:scale-105"
            >
              Book a Ride
              <svg
                className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#more-content"
              className="py-3 px-5 sm:ml-4 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section id="more-content" className="bg-gradient-to-r from-white to-blue-500 py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-screen-xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6 md:text-5xl">
            Discover More About Bookkr
          </h2>
          <p className="text-lg font-normal ext-gray-500 dark:text-gray-400 lg:text-xl sm:px-16 lg:px-48">
            Bookkr offers a seamless platform for drivers and riders to connect. Our services are designed to make travel convenient, safe, and enjoyable. Whether you're planning a short trip or a long journey, Bookkr has got you covered with reliable options and a user-friendly interface.
          </p>
          <p className="text-lg font-ext-gray-500 dark:text-gray-400 lg:text-xl sm:px-16 lg:px-48">
            Join us to explore a new way of traveling where you can share rides, meet new people, and save money. Our platform is equipped with the latest features to ensure your experience is smooth and hassle-free. Get started today and embark on a journey with Bookkr!
          </p>
        </div>
      </section>
    </div>
  );
}
