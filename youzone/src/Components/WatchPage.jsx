import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CloseMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentConatiner from "./CommentConatiner";
import { clearVideoData } from "../Utils/VideoDataSlice";
import LiveChat from "./LiveChat";
import { formatViews } from "../Utils/Helper";
import useVideoAndChannelData from "../CustomHooks/UseVideoandChanneldata";
import ShimmerWatchPage from "../Utils/ShimmerWatchPage";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [showChat, setShowChat] = useState(false);
  const videoId = searchParams.get("V");

  const { currentVideo, currentChannel, loading } =
    useVideoAndChannelData(videoId);

  useEffect(() => {
    dispatch(CloseMenu());
    dispatch(clearVideoData());
  }, [dispatch]);

  const videoTitle = currentVideo?.snippet?.title;
  const channelName = currentChannel?.snippet?.title;
  const channelLogo = currentChannel?.snippet?.thumbnails?.default?.url;
  const subscriberCount = currentChannel?.statistics?.subscriberCount;
  const publishedDate = currentVideo?.snippet?.publishedAt;
  const viewCount = currentVideo?.statistics?.viewCount;
  const likeCount = currentVideo?.statistics?.likeCount;
  const commentCount = currentVideo?.statistics?.commentCount;

  if (loading || !currentVideo || !currentChannel) {
    return <ShimmerWatchPage />;
  }

  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen relative overflow-x-hidden">
      {/* --- MAIN SECTION --- */}
      <div className="flex flex-col lg:flex-row px-2 sm:px-4 lg:px-5 py-4 gap-4">
        {/* LEFT SIDE — VIDEO + INFO + COMMENTS */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Video */}
          <div className="w-full">
            <iframe
              className="w-full h-[240px] sm:h-[380px] md:h-[520px] lg:h-[650px] rounded-2xl shadow-md"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              loading="lazy"
              decoding="async"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Toggle Live Chat button (mobile only) */}
          <div className="block lg:hidden text-center mt-2">
            <button
              onClick={() => setShowChat(!showChat)}
              className="bg-red-200 text-black w-full font-semibold px-5 py-2 rounded-full hover:bg-amber-600 transition-all duration-200"
            >
              {showChat ? "✖ Close Live Chat" : "💬 Show Live Chat"}
            </button>
          </div>

          {/* Show chat below video on small screens */}
          {showChat && (
            <div className="block lg:hidden bg-white rounded-xl shadow-md border border-gray-200 p-3 mt-3">
              <h2 className="text-gray-800 font-semibold text-base sm:text-lg mb-2">
                Live Chat
              </h2>
              <div className="h-[400px] overflow-y-auto">
                <LiveChat />
              </div>
            </div>
          )}

          {/* Video Info */}
          <div className="bg-white shadow-md rounded-md p-3 sm:p-4 font-bold text-md text-gray-600">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-2">
              {videoTitle}
            </h1>

            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base">
              <span>Views: {formatViews(Number(viewCount))}</span>
              <span>
                | Published on:{" "}
                {new Date(publishedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>| {Number(likeCount)?.toLocaleString()} Likes</span>
              <span>| Comments: {Number(commentCount)?.toLocaleString()}</span>
            </div>
          </div>

          {/* Channel Info */}
          {currentChannel && (
            <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4">
                <img
                  src={channelLogo}
                  alt={channelName}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0 border-2 border-gray-200 shadow-sm"
                />
                <div>
                  <h2 className="font-bold text-base sm:text-lg text-gray-800">
                    {channelName}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {formatViews(Number(subscriberCount))} subscribers
                  </p>
                </div>
              </div>

              <button
                disabled
                className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200 cursor-not-allowed opacity-80"
              >
                Subscribe
              </button>
            </div>
          )}

          {/* Comments */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <CommentConatiner />
          </div>
        </div>

        {/* RIGHT SIDE — DESKTOP LIVE CHAT */}
        <div className="hidden lg:block w-[30%]">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-3">
            <h2 className="text-gray-800 font-semibold text-base sm:text-lg mb-2">
              Live Chat
            </h2>
            <LiveChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
