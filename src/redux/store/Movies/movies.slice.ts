import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getMovies,
  type FilmSearchByFiltersResponse,
} from "../../../api/movies";
import type {
  IMovie,
  MoviesRequestParams,
} from "../../../movieTypes/useMovies";

export type TmoviesSlice = {
  loading: boolean;
  error: string | null;
  data: IMovie[];
  isLoadMore: boolean;
  page: number | undefined;
};

const initialState: TmoviesSlice = {
  loading: false,
  error: null,
  data: [],
  isLoadMore: false,
  page: 1,
};

interface FetchMoviesRequestParams extends MoviesRequestParams {
  isLoadMore: boolean;
}

export const fetchMovies = createAsyncThunk<
  FilmSearchByFiltersResponse["items"],
  FetchMoviesRequestParams
>("movies/fetchMovies", async (movierequestparams, isLoadMore) => {
  try {
    const response = await getMovies(movierequestparams);
    return response.data.items;
  } catch (error) {
    throw error;
  }
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (bulder) => {
    bulder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    bulder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.page = action.meta.arg.page;
      state.isLoadMore = action.meta.arg.isLoadMore;
      if (state.isLoadMore) {
        state.data = [...state.data, ...action.payload];
      } else {
        state.data = action.payload;
      }
    });
    bulder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  },
});
export const { reducer } = moviesSlice;
