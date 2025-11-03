import React, { useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import RecommendVideo from "./RecommendVideo";
import ButtonList from "./ButtonList";
import { YOUTUBE_VIDEO_API, GOOGLE_API_KEY } from "../Utils/constant";

const VideoContainer = React.memo(
  ({ selectedCategory, setSelectedCategory }) => {
    // useCallback prevents re-creation of function on each render
    const getApiUrl = useCallback((category) => {
      if (category === "All") return YOUTUBE_VIDEO_API;
      return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${encodeURIComponent(
        category
      )}&key=${GOOGLE_API_KEY}`;
    }, []);

    // useMemo caches API URL until category changes
    const apiUrl = useMemo(
      () => getApiUrl(selectedCategory),
      [getApiUrl, selectedCategory]
    );

    return (
      <div className="w-full">
        <ButtonList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <RecommendVideo apiUrl={apiUrl}>
          {(videos) => (
            <div className="flex flex-wrap justify-center gap-6 p-4 bg">
              {videos?.map((info) => (
                <Link
                  key={info.id.videoId || info.id}
                  to={`/watch?V=${info.id.videoId || info.id}`}
                  className="w-full sm:w-[300px] md:w-[320px] lg:w-[350px]"
                >
                  <VideoCard info={info} />
                </Link>
              ))}
            </div>
          )}
        </RecommendVideo>
      </div>
    );
  }
);

export default VideoContainer;
