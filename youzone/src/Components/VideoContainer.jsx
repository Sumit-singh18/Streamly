import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import RecommendVideo from "./RecommendVideo";
import ButtonList from "./ButtonList";
import { YOUTUBE_VIDEO_API, GOOGLE_API_KEY } from "../Utils/constant";

const VideoContainer = ({ selectedCategory, setSelectedCategory }) => {
  const getApiUrl = (category) => {
    if (category === "All") return YOUTUBE_VIDEO_API;
    return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${category}&key=${GOOGLE_API_KEY}`;
  };

  return (
    <div className="w-full">
      <ButtonList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <RecommendVideo apiUrl={getApiUrl(selectedCategory)}>
        {(videos) => (
          <div className="flex flex-wrap justify-evenly   ">
            {videos?.map((info) => (
              <Link
                key={info.id.videoId || info.id}
                to={`/watch?V=${info.id.videoId || info.id}`}
              >
                <VideoCard info={info} />
              </Link>
            ))}
          </div>
        )}
      </RecommendVideo>
    </div>
  );
};

export default VideoContainer;
