import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPopularMovies, searchMovies } from "../../api/tmdb";

export const getPopularMovies = createAsyncThunk(
  "movies/getPopular",
  async () => {
    const data = await fetchPopularMovies();
    return data || [];
  }
);


export const searchMovieByTitle = createAsyncThunk(
  "movies/search",
  async (query) => {
    const data = await searchMovies(query);
    return data || [];
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [], 
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getPopularMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(searchMovieByTitle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMovieByTitle.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(searchMovieByTitle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
