import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sort: { name: 'популярности', sortProperty: 'rating' },
};

const filterSlice = createSlice({
  name: 'filtres',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload;
    },
    setFilter(state, action) {
      state.categoryId = action.payload.categoryId;
      state.sort.sortProperty = action.payload.sort;
    },
  },
});

export const { setCategoryId, setSortType, setFilter } = filterSlice.actions;
export default filterSlice.reducer;
