import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/data";
import { blog } from "../data/data";

const initialState = {
  questions: data,
  isOpenMobileNav: true,
  activeQuestion: 1,
  quizeState: "question",
  selectedAnswers: [],
  enableClick: true,
  blogs: blog,
  showMore: false,
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
    getQuizeState(state, action) {
      state.quizeState = action.payload;
    },
    restartTest(state) {
      state.activeQuestion = 1;
    },
    addSelectedAnswers(state, action) {
      state.selectedAnswers.push(action.payload);
    },
    resartScore(state) {
      state.selectedAnswers = [];
    },
    enableNextButton(state) {
      state.enableClick = !state.enableClick;
    },
    toggleShowMore(state, action) {
      const { togle, id } = action.payload;
      let targetBlog = state.blogs.find((blog) => blog.id === id);
      targetBlog.togle = !targetBlog.togle;
    },
  },
});

export default questionSlice.reducer;
export const {
  openMobileNav,
  nextQuestion,
  previousQuestion,
  getQuizeState,
  restartTest,
  resartScore,
  addSelectedAnswers,
  enableNextButton,
  toggleShowMore,
} = questionSlice.actions;
