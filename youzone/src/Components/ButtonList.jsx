import React from "react";
import TrendButton from "./TrendButton";

const ButtonList = ({ selectedCategory, setSelectedCategory }) => {
  const list = [
    "All",
    "Gaming",
    "Sports",
    "Cricket",
    "News",
    "Bhagti",
    "Podcast",
    "UPSC",
  ];

  return (
    <div className="hidden md:flex px-4 justify-center flex-wrap gap-4 m-2">
      {list.map((item) => (
        <TrendButton
          key={item}
          text={item}
          isActive={selectedCategory === item}
          onClick={() => setSelectedCategory(item)}
          className={`px-4 py-2 rounded-md shadow-md border border-amber-500 text-white cursor-pointer transition-transform duration-200 transform ${
            selectedCategory === item
              ? "bg-amber-500 text-black font-bold"
              : "bg-gray-800 hover:scale-105 hover:bg-gray-700"
          }`}
        />
      ))}
    </div>
  );
};

export default ButtonList;
