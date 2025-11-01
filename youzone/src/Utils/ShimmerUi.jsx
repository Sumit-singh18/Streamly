import React from "react";
import {
  ShimmerThumbnail,
  ShimmerTitle,
  ShimmerText,
} from "react-shimmer-effects";

const ShimmerUI = ({ count = 8 }) => {
  return (
    <div className="flex flex-wrap justify-evenly gap-3 mt-8">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="p-2 rounded-md shadow-md  w-[300px]  cursor-pointer h-[300px] flex flex-col"
        >
          <ShimmerThumbnail height={180} rounded />
          <div className="mt-3 space-y-2">
            <ShimmerTitle line={2} gap={10} />
            <ShimmerText line={1} gap={10} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUI;
