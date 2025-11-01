import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "searchQuery",
  initialState: {},
  reducers: {
    CacheSearchQuery: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const {CacheSearchQuery} = SearchSlice.actions;
export default SearchSlice.reducer;