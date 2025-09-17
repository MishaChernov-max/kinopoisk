import { Flex } from "antd";
import MovieCard from "../Card/MovieCard";
import type { IMovie } from "../../movieTypes/useMovies";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
interface CardsProps {
  cards: IMovie[];
}
function Cards({ cards }: CardsProps) {
  const navigate = useNavigate();
  const { addToWatchList } = useActions();
  const handleaddToWatchList = (card: IMovie) => {
    addToWatchList(card);
  };

  const moveToMoviePage = (card: IMovie) => {
    navigate(`/film/${card.kinopoiskId}`);
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
            handleClickImg={moveToMoviePage}
          />
        );
      })}
    </Flex>
  );
}
export default Cards;
