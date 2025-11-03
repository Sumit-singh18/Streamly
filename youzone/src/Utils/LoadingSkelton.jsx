import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="p-6 animate-pulse space-y-4">
      <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-4 bg-gray-200 rounded"></div>
      ))}
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
    </div>
  );
};

export default LoadingSkeleton;
