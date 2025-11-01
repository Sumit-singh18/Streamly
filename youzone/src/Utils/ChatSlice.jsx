import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT_COUNT } from "./constant";
const ChatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload); // Add new message first
      if (state.messages.length > OFFSET_LIVE_CHAT_COUNT) {
        state.messages.shift(); // Remove the oldest message (first one)
      }
    },
  },
});

export default ChatSlice.reducer;
export const { addMessage } = ChatSlice.actions;
