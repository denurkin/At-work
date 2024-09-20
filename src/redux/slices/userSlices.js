import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "loading",
};

export const fetchUsers = createAsyncThunk("user/fetchUserStatus", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
});

const userSlices = createSlice({
  name: "userSlices",
  initialState,
  reducers: {
    changeUser(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.items = action.payload.filter((obj) => {
          if (obj.id < 7) {
            return true;
          } else {
            return false;
          }
        });
        state.status = "success";
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "error";
      });
  },
});
export const { changeUser } = userSlices.actions;
export default userSlices.reducer;
