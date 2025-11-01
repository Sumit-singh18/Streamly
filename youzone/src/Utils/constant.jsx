export const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
console.log("Gogle key", GOOGLE_API_KEY);
export const OFFSET_LIVE_CHAT_COUNT = 20;
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=US&key=${GOOGLE_API_KEY}`;
export const YOUTUBE_SEARCH_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

// ---- NEW: Search Results API (use this to fetch videos by query) ----
export const YOUTUBE_SEARCH_RESULT_API = (query, maxResults = 50) =>
  `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${encodeURIComponent(
    query
  )}&type=video&key=${GOOGLE_API_KEY}`;
