// src/redux/honey/operations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllHoney } from '../../services/importData';

export const fetchHoney = createAsyncThunk(
  'honey/fetchHoney',
  async (_, { rejectWithValue }) => {
    try {
      const honeyData = await getAllHoney();
    
      return honeyData;
    } catch (error) {
      console.error('Error fetching honey data:', error); 
      return rejectWithValue(error.message);
    }
  }
);
