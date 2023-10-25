import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:3000/api/random_greeting';

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  },
};

export const getGreeting = createAsyncThunk(
  'greeting/getGreeting',
  async (thunkAPI) => {
    try {
      const res = await axios.get(apiUrl, config);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);
