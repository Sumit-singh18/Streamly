import React from "react";

const TrendButton = ({ text, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md  bg ${
        isActive
          ? "bg-black text-white"
          : "bg-gray-200 hover:cursor-pointer text-gray-800"
      }`}
    >
      {text}
    </button>
  );
};

export default TrendButton;
