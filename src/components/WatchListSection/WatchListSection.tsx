import { useSelector } from "react-redux";
import WatchListCards from "../WatchListCards/WatchListCards";
import "./WatchListSection.scss";
import type { RootState } from "../../redux/store/store";
function WatchListSection() {
  const watchList = useSelector((state: RootState) => state.watchList);

  return (
    <>
      <div className="container">
        <h3 className="watchlist-title">Список Наблюдения</h3>
        {watchList.length ? (
          <WatchListCards movies={watchList} />
        ) : (
          <h1>Список пуст</h1>
        )}
      </div>
    </>
  );
}
export default WatchListSection;
