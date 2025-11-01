// src/Components/ShimmerSearchResults.jsx
import React from "react";
import {
  ShimmerThumbnail,
  ShimmerTitle,
  ShimmerText,
} from "react-shimmer-effects";

const ShimmerSearchResults = ({ count = 6 }) => {
  return (
    <div className="flex flex-col gap-6 w-full items-center p-6 bg-gray-50  min-h-screen transition-colors duration-300">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col sm:flex-row bg-white w-11/12 sm:w-2/3 rounded-xl shadow-md overflow-hidden border border-gray-100"
        >
          {/* Thumbnail shimmer */}
          <div className="relative w-full sm:w-72 h-44 flex-shrink-0">
            <ShimmerThumbnail height={176} width="100%" rounded />
          </div>

          {/* Text shimmer */}
          <div className="p-4 flex flex-col justify-between sm:flex-1">
            <div className="space-y-3">
              <ShimmerTitle line={2} gap={10} />
              <ShimmerText line={2} gap={10} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerSearchResults;
