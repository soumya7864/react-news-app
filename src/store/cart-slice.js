import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isListView: true,
    isHorizontalView: false,
    isFeedbackFormVisible: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
    },
    changeToListView(state, action) {
      state.isListView = true;
      state.isHorizontalView = false;
    },
    changeToHorizontalView(state, action) {
      state.isListView = false;
      state.isHorizontalView = true;
    },
    changeIsFeedbackformVisible(state, action) {
      state.isFeedbackFormVisible = true;
    },
    changeIsFeedbackformNotVisible(state, action) {
      state.isFeedbackFormVisible = false;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
