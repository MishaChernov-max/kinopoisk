import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "../redux/store/store";
import { useEffect } from "react";
import { fetchMovie } from "../redux/store/GetMovie/getMovie.ts.slice";

const useFetchMovie = (id: number) => {
  const dispatch = useAppDispatch();
  const { isMovieLoading, isMovieError, movie } = useSelector(
    (state: RootState) => state.movie
  );
  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch]);
  return { isMovieLoading, isMovieError, movie };
};
export default useFetchMovie;
