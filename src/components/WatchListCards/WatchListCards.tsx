import type { IMovie } from "../../types/movies.types";
import WatchListCard from "../WatchListCard/WatchListCard";
import { Flex } from "antd";
import { useActions } from "../../hooks/useActions";
type WatchListCardsProps = {
  movies: IMovie[];
};
function WatchListCards({ movies }: WatchListCardsProps) {
  const { remove } = useActions();
  const removeToWatchList = (movie: IMovie) => {
    remove(movie);
  };
  return (
    <>
      <Flex
        justify="flex-end"
        align="center"
        wrap="wrap"
        style={{
          rowGap: "24px",
          columnGap: "16px",
        }}
      >
        {movies.map((m) => (
          <WatchListCard
            key={m.kinopoiskId}
            movie={m}
            handleClick={removeToWatchList}
          />
        ))}
      </Flex>
    </>
  );
}
export default WatchListCards;
