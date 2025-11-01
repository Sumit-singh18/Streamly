import React, { useState } from "react";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Main video  */}
      <div className="flex-1 p-2 overflow-y-auto">
        <VideoContainer
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </div>
  );
};

export default MainContainer;
