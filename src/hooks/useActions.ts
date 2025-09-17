import { useDispatch } from "react-redux";
import { actions } from "../redux/store/WatchList/watchList.slice";
import { bindActionCreators } from "@reduxjs/toolkit";
export const reducers = {
  ...actions,
};
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(reducers, dispatch);
};
