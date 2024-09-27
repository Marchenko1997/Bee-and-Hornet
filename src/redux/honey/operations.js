// src/redux/honey/operations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllHoney } from '../../services/importData';

export const fetchHoney = createAsyncThunk(
  'honey/fetchHoney',
  async (_, { rejectWithValue }) => {
    try {
      const honeyData = await getAllHoney();
      console.log('Fetched Honey Data:', honeyData); // Логируем полученные данные
      return honeyData;
    } catch (error) {
      console.error('Error fetching honey data:', error); // Логируем ошибку
      return rejectWithValue(error.message);
    }
  }
);
