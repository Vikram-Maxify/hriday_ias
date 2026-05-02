// redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import scholarshipReducer from "./slice/scholarshipSlice";
import adminReducer from "./slice/adminSlice";

export const store = configureStore({
  reducer: {
    scholarship: scholarshipReducer,
    admin: adminReducer,
  
  },
});