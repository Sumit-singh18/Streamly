import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "username",
  initialState: {
    name: "",
  },
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload;
    },
    clearuserName: (state) => {
      state.name = "";
    },
  },
});

export const { setUserName, clearuserName } = userSlice.actions;
export default userSlice.reducer;
