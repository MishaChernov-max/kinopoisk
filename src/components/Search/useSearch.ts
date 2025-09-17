import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "../../redux/store/store";
import type { SearchProps } from "antd/es/input/Search";
import { fetchSearch } from "../../redux/store/Search/search.slice";
import { useNavigate } from "react-router-dom";

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, data, error } = useSelector(
    (state: RootState) => state.search
  );
  const onSearch: SearchProps["onSearch"] = async (value, _e, info) => {
    try {
      dispatch(
        fetchSearch({
          query: value,
        })
      );
      navigate("/search");
    } catch (error) {
      throw error;
    }
  };
  return {
    loading,
    data,
    error,
    onSearch,
  };
};
