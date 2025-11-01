import React, { useEffect } from "react";
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
    <div className="flex flex-col w-full bg-gray-50 min-h-screen">
      <div className="flex px-5 py-4">
        {/* Video + Live Chat */}
        <div className="p-2">
          <iframe
            className="rounded-2xl shadow-md"
            width="1300"
            height="650"
            src={`https://www.youtube.com/embed/${searchParams.get("V")}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full max-w-full rounded-2xl ml-4">
          <LiveChat />
        </div>
      </div>

      {/* Video Info Section */}
      <div className=" p-2 px-5 ml-3 w-[1300px] ">
        <div className="bg-white shadow-md rounded-md p-3 font-bold text-md text-gray-600">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 leading-snug mb-2">
            {videoTitle}
          </h1>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-3">
            <span>Views : {formatViews(Number(viewCount))}</span>
            <span>
              | Published on :{" "}
              {new Date(publishedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>| {Number(likeCount)?.toLocaleString()} Likes</span>
            <span>| Comments : {Number(commentCount)?.toLocaleString()}</span>
          </div>
        </div>

        {/* Channel Info */}
        {currentChannel && (
          <div className="mt-5 flex items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <img
                src={channelLogo}
                alt={channelName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h2 className="font-bold text-lg text-gray-800">
                  {channelName}
                </h2>
                <p className="text-sm text-gray-500 ">
                  {formatViews(Number(subscriberCount))} subscribers
                </p>
              </div>
            </div>

            <button
              disabled
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200 cursor-not-allowed opacity-80"
            >
              Subscribe
            </button>
          </div>
        )}
      </div>

      {/* Comments container */}
      <div className="px-5 mt-2 w-[1300px]">
        <CommentConatiner />
      </div>
    </div>
  );
};

export default WatchPage;
