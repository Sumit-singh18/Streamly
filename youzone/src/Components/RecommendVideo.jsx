import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../Utils/constant";
import ShimmerUI from "../Utils/ShimmerUi.jsx";

const RecommendVideo = ({ apiUrl, children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchVideos = async () => {
      setLoading(true);
      try {
        const searchRes = await fetch(apiUrl, { signal });
        const searchData = await searchRes.json();

        if (!searchData.items) {
          setVideos([]);
          return;
        }

        const videoIds = searchData.items
          .map((item) => item.id?.videoId)
          .filter(Boolean)
          .join(",");

        let videosWithStats = searchData.items;

        if (videoIds) {
          const statsRes = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${GOOGLE_API_KEY}`,
            { signal }
          );
          const statsData = await statsRes.json();

          videosWithStats = searchData.items.map((item) => {
            const stat = statsData.items.find((s) => s.id === item.id?.videoId);
            return { ...item, statistics: stat?.statistics };
          });
        }

        setVideos(videosWithStats);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching videos:", err);
          setVideos([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
    return () => controller.abort();
  }, [apiUrl]);

  if (loading) return <ShimmerUI count={20} />;

  return children(videos);
};

export default RecommendVideo;
