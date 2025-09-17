import type { IMovie } from "../../types/movies.types";
import actor from "../../assets/Movie/img1.svg?url";
import IMDb from "../../assets/imdb.png";
import "./Movie.scss";
import CustomerButton from "../CustomerButton/CustomerButton";
import { DownloadOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useActions } from "../../hooks/useActions";
import { Flex } from "antd";
import { useParams } from "react-router-dom";
import useFetchMovie from "../../hooks/useFetchMovie";
import StatusWrapper from "../StatusWrapper/StatusWrapper";
import SimilarMovies from "../SimilarMovies/SimilarMovies";
import type { TVideo } from "../../api/movies";

export type MovieProps = {
  movie: IMovie;
  onClick?: React.MouseEventHandler<HTMLElement>;
};
function Movie() {
  const params = useParams();
  console.log(actor);

  const { addToWatchList } = useActions();
  const id = Number(params.id);

  const { isMovieLoading, isMovieError, movie } = useFetchMovie(id);

  const onClickWatchListButton = () => {
    addToWatchList(movie);
  };

  const videoUrl =
    movie?.videos.find((v: TVideo) => v.site === "KINOPOISK_WIDGET") ||
    movie?.videos.find((v: TVideo) => v.site === "YANDEX_DISK") ||
    movie?.videos.find((v: TVideo) => v.site === "YOUTUBE") ||
    movie?.videos.find((v: TVideo) => v.site === "UNKNOWN");

  return (
    <>
      <StatusWrapper
        isMovieLoading={isMovieLoading}
        isMovieError={isMovieError}
      >
        <div
          className="movie-slider"
          style={
            {
              "--movie-poster": `url(${movie?.posterUrl})`,
            } as React.CSSProperties
          }
        >
          <div className="content">
            <div className="movie-container">
              <h1>
                {movie?.nameOriginal ? movie?.nameOriginal : movie?.nameRu}
              </h1>
              <div className="movie-information">
                <span>{movie?.year}</span>
                <div className="dot"></div>
                <div className="age-limit">+16</div>
                <div className="dot"></div>
                <span>{movie?.ratingKinopoisk}</span>
                <div className="dot"></div>
                <div className="IMDb-block">
                  <img src={IMDb} alt="IMDb-logo" />
                  <span>{movie?.ratingImdb}/10</span>
                </div>
              </div>
              <div className="boxoffice">
                Кассовый сбор составил
                {movie?.boxOffice?.find((el) => el.type === "WORLD")?.amount} $
              </div>
              <div className="genres">
                {movie?.genres?.map(({ genre }) => (
                  <div key={genre}>{genre}</div>
                ))}
              </div>
              <div className="actors-img">
                <img src={actor} alt="фотка актера" />
                <img src={actor} alt="фотка актера" />
                <img src={actor} alt="фотка актера" />
                <img src={actor} alt="фотка актера" />
                <img src={actor} alt="фотка актера" />
              </div>
              <p>
                {movie?.description ? (
                  movie.description
                ) : (
                  <span>
                    داستان مادری که پس از فروپاشی خانواده‌اش در یک حادثه طی
                    دیکتاتوری نظامی در سال 1971 و در برزیل، باید دوباره روی پای
                    خودش بایستد تا...
                  </span>
                )}
              </p>
              <Flex align="center" gap="16px">
                <CustomerButton
                  children="Добавить"
                  icon={<PlusCircleOutlined />}
                  style={{
                    background: "#193CB8",
                    color: "#BEDBFF",
                    border: "0",
                    borderRadius: "24px",
                  }}
                  onClick={onClickWatchListButton}
                />
                <CustomerButton
                  children="Скачать"
                  icon={<DownloadOutlined />}
                  style={{
                    background: "#BEDBFF",
                    color: "#020618",
                    border: "0",
                    borderRadius: "24px",
                    flexDirection: "row",
                  }}
                />
              </Flex>
            </div>
            <img
              src={movie?.posterUrl}
              alt="poster-img"
              className="poster-img"
            />
            <iframe
              width="560"
              height="315"
              src={videoUrl.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; 
         encrypted-media; gyroscope; 
         picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <SimilarMovies items={movie?.similar}></SimilarMovies>
      </StatusWrapper>
    </>
  );
}
export default Movie;
