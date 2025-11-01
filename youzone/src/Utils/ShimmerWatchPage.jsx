import React from "react";
import {
  ShimmerThumbnail,
  ShimmerTitle,
  ShimmerText,
} from "react-shimmer-effects";

const ShimmerWatchPage = () => {
  return (
    <div className="flex flex-col w-full bg-gray-100 min-h-screen animate-pulse">
      {/* Video and Chat */}
      <div className="flex px-5 py-4">
        <div className="p-2">
          <ShimmerThumbnail height={650} width={1300} rounded />
        </div>
        <div className="w-full max-w-full rounded-2xl ml-4 bg-white shadow p-4">
          <ShimmerTitle line={1} gap={10} />
          <div className="mt-4 space-y-2">
            <ShimmerText line={5} gap={8} />
          </div>
        </div>
      </div>

      {/* Video Info */}
      <div className="p-2 px-5 ml-3 w-[1300px] space-y-4">
        <div className="bg-white shadow-md rounded-md p-3">
          <ShimmerTitle line={1} gap={10} />
          <ShimmerText line={2} gap={10} />
        </div>

        {/* Channel Info */}
        <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            {/* Custom shimmer circle for profile */}
            <div className="w-12 h-12 rounded-full bg-gray-300 animate-pulse"></div>
            <div>
              <ShimmerTitle line={1} gap={5} />
              <ShimmerText line={1} gap={5} />
            </div>
          </div>
          <div className="w-32 h-10 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Comments */}
      <div className="px-5 mt-2 w-[1300px] space-y-3">
        <ShimmerTitle line={1} gap={10} />
        <ShimmerText line={3} gap={10} />
        <ShimmerText line={3} gap={10} />
        <ShimmerText line={3} gap={10} />
      </div>
    </div>
  );
};

export default ShimmerWatchPage;
