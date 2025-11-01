import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../Utils/constant";
import ShimmerUI from "../Utils/ShimmerUi.jsx";

const RecommendVideo = ({ apiUrl, children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        // 1️⃣ Fetch videos from search API
        const searchRes = await fetch(apiUrl);
        const searchData = await searchRes.json();

        if (!searchData.items) {
          setVideos([]);
          setLoading(false);
          return;
        }

        // 2️⃣ Get all video IDs
        const videoIds = searchData.items
          .map((item) => item.id.videoId)
          .filter(Boolean)
          .join(",");

        // 3️⃣ Fetch statistics for those video IDs
        let videosWithStats = searchData.items;
        if (videoIds) {
          const statsRes = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${GOOGLE_API_KEY}`
          );
          const statsData = await statsRes.json();

          // 4️⃣ Merge statistics into search results
          videosWithStats = searchData.items.map((item) => {
            const stat = statsData.items.find((s) => s.id === item.id.videoId);
            return { ...item, statistics: stat?.statistics };
          });
        }

        setVideos(videosWithStats);
        console.log("Video stats", videosWithStats);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [apiUrl]);

  if (loading) return <ShimmerUI count={20} />;

  return children(videos);
};

export default RecommendVideo;
