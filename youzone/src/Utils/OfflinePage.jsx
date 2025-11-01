import React from "react";

const OfflinePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-center px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          You're Offline
        </h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Oops! It seems like you've lost your internet connection. Please check
          your network and try again.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 active:scale-95 transition-all duration-200"
        >
          Retry
        </button>

        <div className="mt-6 text-sm text-gray-500 animate-pulse">
          Waiting to reconnect...
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;
