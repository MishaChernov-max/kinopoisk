import { useSelector } from "react-redux";
import { fetchMovies } from "../../redux/store/Movies/movies.slice";
import { useAppDispatch, type RootState } from "../../redux/store/store";
import "./Pagination.scss";
import fc from "classnames";

export type TPagination = {
  totalpages: number;
};
function Pagination({ totalpages }: TPagination) {
  const dispatch = useAppDispatch();
  const { page } = useSelector((state: RootState) => state.movies);
  const pages: number[] = [];
  for (let index = 1; index <= totalpages; index++) {
    pages.push(index);
  }
  return (
    <>
      <div className="pagination">
        {pages.map((p) => (
          <button
            className={fc("pagination-btn", { active: page === p })}
            onClick={() => {
              dispatch(fetchMovies({ page: p, isLoadMore: false }));
            }}
            key={p}
          >
            {p}
          </button>
        ))}
      </div>
    </>
  );
}
export default Pagination;
