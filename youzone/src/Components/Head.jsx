import React, { useState, useEffect } from "react";
import Youtubeicon from "../assets/youtube-svgrepo-com.svg";
import UserProfile from "../assets/user_profile.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { CacheSearchQuery } from "../Utils/SearchSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.searchQuery);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.name);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/results?search_query=${encodeURIComponent(searchQuery)}`);
      setShowSuggestions(false);
    }
  };
  const getSearchSuggestions = async () => {
    const data = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(CacheSearchQuery({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) setSuggestions(searchCache[searchQuery]);
      else getSearchSuggestions();
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="flex justify-between items-center p-2 shadow-md px-6 bg-white sticky top-0 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <svg
          onClick={() => dispatch(toggleMenu())}
          className="cursor-pointer hover:scale-110 transition-transform duration-200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="28"
          height="28"
          fill="#333"
        >
          <path d="M0 7.5h50v5H0zm0 15h50v5H0zm0 15h50v5H0z"></path>
        </svg>

        <Link to="/" className="flex items-center gap-1">
          <img
            src={Youtubeicon}
            alt="YouTube icon"
            className="w-9 h-9 object-contain"
          />
        </Link>
      </div>

      {/* Searchbar Section */}
      <div className="relative flex items-center">
        <input
          type="text"
          className="w-[500px] font-medium rounded-l-2xl border border-gray-300 p-2 focus:outline-none focus:ring-0 focus:border-gray-400"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />

        <button
          onClick={handleSearch}
          className="hover:bg-gray-300 bg-gray-200 p-2 rounded-r-2xl border border-gray-300 font"
        >
          Search
        </button>
        {showSuggestions && (
          <div className="absolute top-full left-0 right-0 bg-white rounded-md shadow-lg mt-1 text-left z-10">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                  onMouseDown={() => {
                    setSearchQuery(s);
                    navigate(`/results?search_query=${encodeURIComponent(s)}`);
                    setShowSuggestions(false);
                  }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 pr-2">
        {userName && (
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 transition-all duration-200">
            <p className="text-gray-700 font-semibold text-sm">
              <span className="text-blue-600">Hi, {userName}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Head;
