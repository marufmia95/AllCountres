

import React from 'react';

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <div className="mb-6">
          <div className="inline-block animate-spin">
            <svg
              className="w-20 h-20 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-8h2v6h-2V8z"
              ></path>
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Oops! Something went wrong.</h1>
        <h1 className='text-8xl font-bold text-red-500 transform animate-bounce transition-transform'>404</h1>
        <p className="text-base text-gray-600">
          We're sorry, but it seems like there was an error. Please try again later.
        </p>
      </div>
    </div>
  );
};

export default Error;
