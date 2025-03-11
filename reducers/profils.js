import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: [], 
};

export const profilsSlice = createSlice({
  name: "profils",
  initialState,
  reducers: {
          getprofils:(state,action)=>{
            state.value.push(action.payload)
        },

  },
});

export const {getprofils } = profilsSlice.actions;
export default profilsSlice.reducer;