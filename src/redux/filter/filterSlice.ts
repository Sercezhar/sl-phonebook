import { createSlice } from '@reduxjs/toolkit';

interface filterState {
  value: string;
}

const initialState: filterState = {
  value: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
