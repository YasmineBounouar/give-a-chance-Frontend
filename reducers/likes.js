import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    addLikes: (state, actions) => {
      state.value.push(actions.payload);
    },
    removeLikes: (state, action) => {
      state.value = state.value.filter((like) => like !== action.payload);
    }, //dans la clé etrangere du schema   on stocke l'id du recruteur qui a liker
  },
});

export const {  addLikes, removeLikes } = likesSlice.actions;
export default likesSlice.reducer;
