import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
  name: "Sidebar",
  initialState: {
    selectedCategory: "All",
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategory } = SidebarSlice.actions;
export default SidebarSlice.reducer;
