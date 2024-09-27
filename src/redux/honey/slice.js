// src/redux/honey/slice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchHoney } from './operations';

const initialState = {
  honey: [],
  isLoading: false,
  error: null,
};

const honeySlice = createSlice({
  name: 'honey',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHoney.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchHoney.fulfilled, (state, action) => {
        state.isLoading = false;
        state.honey = action.payload; // Здесь сохраняем данные
        console.log('Honey data saved in Redux:', action.payload); // Логируем сохраненные данные
      })
      .addCase(fetchHoney.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.error('Error loading honey data:', action.payload); // Логируем ошибку
      });
  },
});

export default honeySlice.reducer;
