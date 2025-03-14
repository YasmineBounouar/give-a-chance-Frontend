import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: null, username: null, id:null, email: null, role: null }
};



export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.email = action.payload.email;
      state.value.role = action.payload.role;
      state.value.id = action.payload.id;

      console.log(state.value);
    },
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
      state.value.email = null;
      state.value.role = null;
      state.value.id = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
