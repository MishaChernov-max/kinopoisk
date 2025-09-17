import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { search } from "../../../services/movieService";
import type { IMovie } from "../../../types/movies.types";
import type { FilmSearchByFiltersResponse } from "../../../api/movies";

type TSearchSlice = {
  loading: boolean;
  data: IMovie[];
  error: string | null;
  query: string | null;
};

type TSearchPayload = {
  query: string;
};

export const fetchSearch = createAsyncThunk<
  FilmSearchByFiltersResponse["items"],
  TSearchPayload
>("search/fetchSearch", async ({ query }) => {
  try {
    const found = await search(query);
    return found.items;
  } catch (error) {
    throw error;
  }
});

const initialState: TSearchSlice = {
  loading: false,
  data: [],
  error: null,
  query: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider.addCase(fetchSearch.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    buider.addCase(fetchSearch.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.query = action.meta.arg.query;
      state.error = null;
    });
    buider.addCase(fetchSearch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  },
});
export const { reducer } = searchSlice;
