import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenMobileNav: false,
  activeQuestion: 1,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    openMobileNav(state) {
      state.isOpenMobileNav = !state.isOpenMobileNav;
    },
  },
});

export default questionSlice.reducer;
export const { openMobileNav } = questionSlice.actions;
