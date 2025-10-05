import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('watchlist')) || [],
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      const exists = state.items.some((movie) => movie.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem('watchlist', JSON.stringify(state.items));
      }
    },
    removeFromWatchlist: (state, action) => {
      state.items = state.items.filter((movie) => movie.id !== action.payload);
      localStorage.setItem('watchlist', JSON.stringify(state.items));
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
