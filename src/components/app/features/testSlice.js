import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/data";

const initialState = {
  questions: data,
  isOpenMobileNav: true,
  activeQuestion: 1,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    openMobileNav(state) {
      state.isOpenMobileNav = !state.isOpenMobileNav;
    },
    nextQuestion(state) {
      state.activeQuestion += 1;
    },
    previousQuestion(state) {
      state.activeQuestion -= 1;
    },
  },
});

export default questionSlice.reducer;
export const { openMobileNav, nextQuestion, previousQuestion } =
  questionSlice.actions;
