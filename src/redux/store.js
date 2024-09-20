import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/userSlices";
import archive from "./slices/archiveSlices";

export const store = configureStore({
  reducer: { user, archive },
});
