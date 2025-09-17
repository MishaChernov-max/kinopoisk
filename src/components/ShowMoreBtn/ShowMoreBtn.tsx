import { useSelector } from "react-redux";
import { fetchMovies } from "../../redux/store/Movies/movies.slice";
import { useAppDispatch, type RootState } from "../../redux/store/store";
import "./ShowMoreBtn.scss";
import cx from "classnames";
function ShowMoreBtn() {
  const dispatch = useAppDispatch();
  const { page } = useSelector((state: RootState) => state.movies);
  return (
    <>
      <button
        className={cx("showmore", { disabled: page === 5 })}
        onClick={() => {
          dispatch(
            fetchMovies({
              limit: 100,
              page: (page || 1) + 1,
              isLoadMore: true,
            })
          );
        }}
      >
        Показать еще
      </button>
    </>
  );
}
export default ShowMoreBtn;
