import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getBoxOffice,
  getMovie,
  getMovieVideos,
  getSimilarMovies,
} from "../../../api/movies";
import type { IMovie } from "../../../types/movies.types";

export type TmovieSlice = {
  isMovieLoading: boolean;
  isMovieError: string | null;
  movie: IMovie | null;
};

export const fetchMovie = createAsyncThunk<IMovie, number>(
  "movie/fetchMovie",
  async (id) => {
    const dataBoxOffice = await getBoxOffice(id);
    const movie = await getMovie(id);
    const video = await getMovieVideos(id);
    const similar = await getSimilarMovies(id);
    const data = {
      ...movie,
      boxOffice: dataBoxOffice.items,
      videos: video.items,
      similar: similar.data.items,
    };
    return data;
  }
);

const initialState: TmovieSlice = {
  isMovieLoading: false,
  isMovieError: null,
  movie: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (bulder) => {
    bulder.addCase(fetchMovie.pending, (state) => {
      state.isMovieLoading = true;
      state.isMovieError = null;
    });
    bulder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.isMovieLoading = false;
      state.isMovieError = null;
      state.movie = action.payload;
    });
    bulder.addCase(fetchMovie.rejected, (state, action) => {
      state.isMovieLoading = false;
      state.isMovieError = action.error.message ?? null;
    });
  },
});
export const { reducer } = movieSlice;
