import { createSlice } from "@reduxjs/toolkit";
import type { IMovie } from "../../../hooks/useMovies";

const initialState: IMovie[] = [];

export const watchList = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addToWatchList: (state: IMovie[], { payload: movie }) => {
      if (movie) {
        const currentmovie = state.some(
          (m) => m.kinopoiskId === movie.kinopoiskId
        );
        if (!currentmovie) {
          state.push(movie);
        }
      }
    },
    remove: (state: IMovie[], { payload: movie }) => {
      if (movie) {
        const currentmovie = state.some(
          (m) => m.kinopoiskId === movie.kinopoiskId
        );
        if (currentmovie) {
          return state.filter((m) => m.kinopoiskId !== movie.kinopoiskId);
        }
      }
    },
  },
});

export const { actions, reducer } = watchList;
