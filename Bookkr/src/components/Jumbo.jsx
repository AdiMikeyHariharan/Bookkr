import React from 'react';

export default function Jumbo() {
  return (
    <div>
      <section className="bg-gradient-to-r from-white to-blue-500">
        <div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-24">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl">
            We invest in the world’s potential
          </h1>
          <p className="mb-10 text-xl font-normal text-gray-200 lg:text-2xl sm:px-16 lg:px-48">
            Here at Flowbite, we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-lg font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-200 transform hover:scale-105"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
              href="#"
              className="py-3 px-5 sm:ms-4 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}