import React from "react";
import Sidebar from "./Sidebar";
import Head from "./Head";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex flex-col h-screen">
      <Head />
      <div className="flex flex-1">
        {/* <Sidebar /> */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
