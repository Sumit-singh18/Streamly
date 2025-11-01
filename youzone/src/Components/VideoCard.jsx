import React from "react";
import { formatViews, formatDuration } from "../Utils/Helper";

const VideoCard = ({ info }) => {
  const { snippet, statistics, contentDetails } = info || {};
  const { channelTitle, title, thumbnails } = snippet || {};

  return (
    <div
      className="p-2 mb-2 rounded-md hover:scale-105 w-[400px] cursor-pointer 
  transform transition-transform duration-300 ease-in-out hover:bg-slate-100"
    >
      {/* Thumbnail Section */}
      <div className="relative w-full aspect-video mb-3 rounded-md overflow-hidden">
        <img
          src={thumbnails?.medium?.url}
          alt={title}
          className="w-full h-full object-cover"
        />
        {contentDetails?.duration && (
          <span
            className="absolute bottom-1 right-1 bg-black bg-opacity-75 
        text-white text-xs px-1.5 py-0.5 rounded"
          >
            {formatDuration(contentDetails?.duration)}
          </span>
        )}
      </div>

      {/* Video Details */}
      <div className="flex items-start gap-3">
        {/* Channel Thumbnail */}
        <div className="w-9 h-9 flex-shrink-0">
          <img
            src={thumbnails?.medium?.url}
            alt={channelTitle}
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* Video Info */}
        <div className="flex flex-col flex-1">
          {/* Title */}
          <p className="font-semibold text-[15px] text-gray-900 leading-snug line-clamp-2">
            {title}
          </p>

          {/* Channel name & views */}
          <div className="mt-1 space-y-0.5">
            <p className="text-sm text-gray-700 font-medium">{channelTitle}</p>
            <p className="text-sm text-gray-500">
              {formatViews(Number(statistics?.viewCount || 0))} views
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
