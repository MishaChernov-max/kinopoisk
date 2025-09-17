import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as watchListReducer } from "./WatchList/watchList.slice";
import { reducer as searchReducer } from "./Search/search.slice";
import { reducer as movieReducer } from "./Movies/movies.slice";
import { useDispatch } from "react-redux";
import { reducer as MovieReducer } from "./GetMovie/getMovie.ts.slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

export const reducers = combineReducers({
  watchList: watchListReducer,
  search: searchReducer,
  movies: movieReducer,
  movie: MovieReducer,
});
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

export const persistor = persistStore(store);

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
