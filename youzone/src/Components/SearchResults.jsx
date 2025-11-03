import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_RESULT_API } from "../Utils/constant";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchShimmerUi from "../Utils/SearchShimmerUi";
const SearchResults = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  console.log("Search query:", query);
  const selectedCategory = useSelector(
    (store) => store.Sidebar.selectedCategory
  );

  useEffect(() => {
    const fetchResults = async () => {
      const searchTerm = query || selectedCategory; // ✅ Prefer query
      if (!searchTerm) return;

      try {
        setLoading(true);
        const response = await fetch(YOUTUBE_SEARCH_RESULT_API(searchTerm, 50));
        const data = await response.json();
        setVideos(data.items || []);
      } catch (err) {
        console.error("Error fetching search results:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, selectedCategory]); // ✅ Runs when either changes
  // Only refetch whenever selectedCategory changes

  if (loading) return <SearchShimmerUi count={6} />;

  if (!videos.length)
    return <div className="p-5 text-lg">No results found for "{query}"</div>;

  {
    /* <h2 className="text-xl font-semibold mb-4">Results for "{query}"</h2> */
  }
  return (
    <div className="flex flex-col items-center gap-6 w-full p-4 bg-gray-50 min-h-screen">
      {videos.map((video) => (
        <Link
          key={video.id.videoId}
          to={`/watch?V=${video.id.videoId}`}
          className="flex flex-col sm:flex-row bg-white w-full sm:w-4/5 md:w-3/4 lg:w-2/3 
                 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 
                 hover:bg-slate-100 overflow-hidden"
        >
          {/* Thumbnail */}
          <div className="relative w-full sm:w-72 h-48 flex-shrink-0">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="p-4 flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-blue-600 line-clamp-2">
                {video.snippet.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {video.snippet.channelTitle}
              </p>
              <p className="text-sm text-gray-500 line-clamp-2">
                {video.snippet.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
