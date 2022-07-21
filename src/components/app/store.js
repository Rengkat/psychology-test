import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "../app/features/testSlice";
export const store = configureStore({
  reducer: {
    question: questionReducer,
  },
});
