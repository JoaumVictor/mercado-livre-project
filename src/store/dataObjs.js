import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  objCategories: [],
  objProducts: [],
};

export const dataObjs = createSlice({
  name: 'objects',
  initialState,
  reducers: {
    addCategories: (state, { payload }) => {
      state.objCategories = payload;
    },
    addProducts: (state, { payload }) => {
      state.objProducts = payload;
    },
  },
});

export const { addCategories, addProducts } = dataObjs.actions;
export default dataObjs.reducer;
