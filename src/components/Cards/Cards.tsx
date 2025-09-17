import { Flex } from "antd";
import MovieCard from "../Card/MovieCard";
import type { IMovie } from "../../types/movies.types";
import { useActions } from "../../hooks/useActions";
interface CardsProps {
  cards: IMovie[];
}
function Cards({ cards }: CardsProps) {
  const { addToWatchList } = useActions();
  const handleaddToWatchList = (card: IMovie) => {
    addToWatchList(card);
  };

  return (
    <Flex
      justify="flex-end"
      align="center"
      wrap="wrap"
      style={{
        rowGap: "24px",
        columnGap: "16px",
      }}
    >
      {cards.map((c) => {
        return (
          <MovieCard
            key={c.kinopoiskId}
            card={c}
            handleClick={handleaddToWatchList}
          />
        );
      })}
    </Flex>
  );
}
export default Cards;
