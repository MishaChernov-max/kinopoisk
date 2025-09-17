import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "../redux/store/store";
import { useEffect } from "react";
import { fetchSimilar } from "../redux/store/SimiliarMovies/similarMovies.slice";

const useFetchingSimilarMovies = (kinopoiskId: number) => {
  const { isLoading, isError, items } = useSelector(
    (state: RootState) => state.similar
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSimilar({ kinopoiskId }));
  }, []);
  return { isLoading, isError, items };
};
export default useFetchingSimilarMovies;
