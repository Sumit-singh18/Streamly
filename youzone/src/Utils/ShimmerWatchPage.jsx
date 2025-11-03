import React, { memo } from "react";
import {
  ShimmerThumbnail,
  ShimmerTitle,
  ShimmerText,
} from "react-shimmer-effects";

const ShimmerWatchPage = () => {
  return (
    <div
      className="flex flex-col w-full min-h-screen bg-gray-50 animate-pulse"
      aria-busy="true"
      aria-label="Loading video page"
    >
      {/* ▶️ Video Player + Live Chat */}
      <section className="flex flex-wrap gap-4 px-5 py-6">
        {/* Video Placeholder */}
        <div className="flex-shrink-0">
          <ShimmerThumbnail height={650} width={1280} rounded />
        </div>

        {/* Chat Panel Placeholder */}
        <aside className="flex-1 min-w-[350px] bg-white shadow-md rounded-2xl p-4 space-y-4">
          <ShimmerTitle line={1} gap={12} />
          <ShimmerText line={5} gap={10} />
        </aside>
      </section>

      {/* 📄 Video Info Section */}
      <section className="w-full max-w-[1280px] mx-auto px-5 space-y-6">
        {/* Video Meta Info */}
        <div className="bg-white shadow-sm rounded-xl p-5 space-y-3">
          <ShimmerTitle line={1} gap={10} />
          <ShimmerText line={2} gap={8} />
        </div>

        {/* Channel Info */}
        <div className="flex justify-between items-center bg-white shadow-sm border border-gray-100 rounded-xl p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-300" />
            <div className="space-y-1">
              <ShimmerTitle line={1} gap={5} />
              <ShimmerText line={1} gap={5} />
            </div>
          </div>
          <div className="w-28 h-10 bg-gray-300 rounded-full" />
        </div>
      </section>

      {/* 💬 Comments Section */}
      <section className="w-full max-w-[1280px] mx-auto px-5 mt-6 space-y-5">
        <ShimmerTitle line={1} gap={10} />
        {[...Array(3)].map((_, i) => (
          <ShimmerText key={i} line={3} gap={8} />
        ))}
      </section>
    </div>
  );
};

export default memo(ShimmerWatchPage);
