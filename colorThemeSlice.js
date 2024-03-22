import { createSlice } from "@reduxjs/toolkit";

const colorThemeSlice = createSlice({
  name: "colorTheme",
  initialState: [],
  reducers: {
    updateColorTheme: (state) => {
      state.values(state);
    },
  },
});
