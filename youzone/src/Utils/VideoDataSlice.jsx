// src/Utils/videoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    currentVideo: null,
    currentChannel: null,
  },
  reducers: {
    setVideo: (state, action) => {
      state.currentVideo = action.payload;
    },
    setChannel: (state, action) => {
      state.currentChannel = action.payload;
    },
    clearVideoData: (state) => {
      state.currentVideo = null;
      state.currentChannel = null;
    },
  },
});

export const { setVideo, setChannel, clearVideoData } = videoSlice.actions;
export default videoSlice.reducer;
