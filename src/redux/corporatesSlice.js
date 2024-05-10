import { createSlice } from "@reduxjs/toolkit";

export const corporatesSlice = createSlice({
  name: "corporates",
  initialState: {
    corporate: [],
  },
  reducers: {
    addCorporate: (state, action) => {
      state.corporate.push(action.payload);
    },
    deleteCorporate: (state, action) => {
      state.corporate = state.corporate.filter(
        (corporate) => corporate.id !== action.payload
      );
    },
    updateCorporate(state, action) {
      const { id, titleAR, titleEN, email } = action.payload;
      const existingCorporate = state.corporate.find(
        (corporate) => corporate.id == id
      );
      if (existingCorporate) {
        existingCorporate.titleAR = titleAR;
        existingCorporate.titleEN = titleEN;
        existingCorporate.email = email;
      }
    },
  },
});

export const { addCorporate, deleteCorporate, updateCorporate } =
  corporatesSlice.actions;

export default corporatesSlice.reducer;
