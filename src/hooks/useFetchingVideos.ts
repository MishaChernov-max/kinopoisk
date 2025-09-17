import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "../redux/store/store";
import { fetchVideos } from "../redux/store/Videos/Videosslice";
import { useEffect } from "react";

const useFetchingVideos = (kinopoiskId: number) => {
  const dispatch = useAppDispatch();
  const { isLoading, isError, videos } = useSelector(
    (state: RootState) => state.videos
  );
  useEffect(() => {
    dispatch(fetchVideos({ kinopoiskId }));
  }, [dispatch]);
  return { isLoading, isError, videos };
};
export default useFetchingVideos;
