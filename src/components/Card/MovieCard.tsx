import { Button, Flex } from "antd";
import type { IMovie } from "../../types/movies.types";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./Card.scss";

export type MovieCardProps = {
  card: IMovie;
  handleClick?: (card: IMovie) => void;
  handleClickImg?: (card: IMovie) => void;
};

function MovieCard({
  card,
  handleClick = () => {},
  handleClickImg = () => {},
}: MovieCardProps) {
  const {
    posterUrl,
    nameRu,
    nameOriginal,
    ratingImdb,
    genres,
    year,
    ratingKinopoisk,
  } = card;

  const onClick = () => {
    handleClick(card);
  };
  const onClickImg = () => {
    handleClickImg(card);
  };

  return (
    <div className="card">
      <img
        src={posterUrl}
        alt="movie-img"
        className="movie-img"
        onClick={onClickImg}
      />

      <h5>{nameOriginal ? nameOriginal : nameRu}</h5>
      <p>Imdb: {ratingImdb}</p>
      <Flex gap={20}>
        {genres?.slice(0, 2).map(({ genre }) => (
          <span key={genre}>{genre}</span>
        ))}
      </Flex>
      <Flex justify="space-between" align="center">
        <Flex gap={20}>
          <span>{year}</span>
          <span>Кинопоиск: {ratingKinopoisk}</span>
        </Flex>
        <Button type="primary" shape="circle" onClick={onClick}>
          <PlusCircleOutlined />
        </Button>
      </Flex>
    </div>
  );
}
export default MovieCard;
