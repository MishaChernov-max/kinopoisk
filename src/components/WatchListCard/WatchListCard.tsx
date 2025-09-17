import { Button, Flex } from "antd";
import type { IMovie } from "../../movieTypes/useMovies";
import "../Card/Card.scss";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const onClick = () => {
    handleClick(movie);
  };
  const onClickImg = () => {
    navigateToMoviePage(movie);
  };
  const navigateToMoviePage = (movie: IMovie) => {
    navigate(`/film/${movie.kinopoiskId}`);
  };
  return (
    <>
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
