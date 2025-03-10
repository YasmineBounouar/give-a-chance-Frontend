import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: [], 
};

export const cardprofilsSlice = createSlice({
  name: "cardprofils",
  initialState,
  reducers: {
          getprofils:(state,action)=>{
            state.value.push(action.payload)
        },

  },
});

export const {getprofils } = cardprofilsSlice.actions;
export default cardprofilsSlice.reducer;