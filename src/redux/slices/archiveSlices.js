import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  archive: [],
};

const archiveSlices = createSlice({
  name: "userSlices",
  initialState,
  reducers: {
    addArchive(state, action) {
      state.archive = action.payload;
    },
  },
});
export const { addArchive } = archiveSlices.actions;
export default archiveSlices.reducer;
