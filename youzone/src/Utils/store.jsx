import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import SearchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";
import sidebarSlice from "./SidebarSlice";
import videoSlice from "./VideoDataSlice";
import userNameSlice from "./userNameSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    searchQuery: SearchSlice,
    chat: ChatSlice,
    Sidebar: sidebarSlice,
    video: videoSlice,
    user: userNameSlice,
  },
});

export default store;
