import { Button, Flex } from "antd";
import type { IMovie } from "../../types/movies.types";
import "../Card/Card.scss";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./WatchListCard.scss";
type WatchListCardProps = {
  movie: IMovie;
  handleClick?: (card: IMovie) => void;
};
function WatchListCard({ movie, handleClick = () => {} }: WatchListCardProps) {
  const {
    posterUrl,
    nameRu,
    nameOriginal,
    ratingImdb,
    genres,
    year,
    ratingKinopoisk,
  } = movie;

  const onClick = () => {
    handleClick(movie);
  };

  return (
    <>
      <div className="card">
        <Link to={`/film/${movie.kinopoiskId}`}>
          <img src={posterUrl} alt="movie-img" className="movie-img" />
        </Link>

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
          <Button
            type="primary"
            shape="circle"
            onClick={onClick}
            className="watchList-btn"
          >
            <CloseCircleOutlined />
          </Button>
        </Flex>
      </div>
    </>
  );
}
export default WatchListCard;
