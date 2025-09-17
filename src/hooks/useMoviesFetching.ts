import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "../redux/store/store";
import { fetchMovies } from "../redux/store/Movies/movies.slice";
import { useEffect } from "react";

const useMoviesFetching = () => {
  const dispatch = useAppDispatch();
  const { loading, error, data, page } = useSelector(
    (state: RootState) => state.movies
  );
  useEffect(() => {
    dispatch(fetchMovies({ limit: 100, page: 1, isLoadMore: false }));
  }, [dispatch]);

  return { loading, error, data, page };
};
export default useMoviesFetching;
