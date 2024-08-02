import React from 'react';

export default function JumboLTR() {
  return (
    <div>
      <section className="bg-gradient-to-r from-white to-blue-500">
        <div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-24">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl">
            We invest in the world’s potential
          </h1>
          <p className="mb-10 text-xl font-normal text-gray-100 lg:text-2xl sm:px-16 lg:px-48">
            Here at Flowbite, we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="/"
              className="inline-flex justify-center items-center py-3 px-6 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-105"
            >
              Get started
              <svg
                className="w-4 h-4 ml-2"
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
              href="/"
              className="py-3 px-6 sm:ml-4 text-lg font-medium text-gray-900 bg-white border border-gray-300 rounded-lg shadow-lg hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 transition-transform transform hover:scale-105"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}