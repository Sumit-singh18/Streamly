import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideo, setChannel, clearVideoData } from "../Utils/VideoDataSlice";
import { GOOGLE_API_KEY as API_KEY } from "../Utils/constant";

const useVideoAndChannelData = (videoId) => {
  const dispatch = useDispatch();
  const { currentVideo, currentChannel } = useSelector((store) => store.video);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoAndChannel = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch video details
        const videoRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
        );
        const videoJson = await videoRes.json();

        if (!videoJson.items || videoJson.items.length === 0) {
          throw new Error("No video data found");
        }

        const videoInfo = videoJson.items[0];
        dispatch(setVideo(videoInfo));

        // Fetch channel details
        const channelId = videoInfo?.snippet?.channelId;
        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`
        );
        const channelJson = await channelRes.json();

        if (!channelJson.items || channelJson.items.length === 0) {
          throw new Error("No channel data found");
        }

        dispatch(setChannel(channelJson.items[0]));
      } catch (err) {
        console.error("Error fetching video/channel data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (videoId) {
      dispatch(clearVideoData());
      fetchVideoAndChannel();
    }
  }, [videoId, dispatch]);

  return { currentVideo, currentChannel, loading, error };
};

export default useVideoAndChannelData;
