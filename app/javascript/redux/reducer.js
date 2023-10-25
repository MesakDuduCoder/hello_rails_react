import { createSlice } from '@reduxjs/toolkit';
import { getGreeting } from './action';

const initialState = {
  greeting: '',
  isLoading: true,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: {
    [getGreeting.pending]: (state) => {
      state.isLoading = true;
    },
    [getGreeting.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.greeting = action.payload.greeting;
    },
    [getGreeting.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default greetingSlice.reducer;
