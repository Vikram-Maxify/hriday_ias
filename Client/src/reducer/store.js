// redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import scholarshipReducer from "./slice/scholarshipSlice";

export const store = configureStore({
  reducer: {
    scholarship: scholarshipReducer,
  },
});