import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/movieSlice';
import watchlistReducer from './slices/watchlistSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    watchlist: watchlistReducer,
  },
});

export default store;
