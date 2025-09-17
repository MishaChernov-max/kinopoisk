import IMDb from "../../assets/imdb.png";
import type { IMovie } from "../../types/movies.types";
import actor from "../../assets/Movie/img1.svg?url";
import { Link } from "react-router-dom";
import CustomerButton from "../CustomerButton/CustomerButton";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useActions } from "../../hooks/useActions";

type SlideProps = {
  movie: IMovie;
};
function Slide({ movie }: SlideProps) {
  const {
    kinopoiskId,
    nameOriginal,
    nameRu,
    posterUrl,
    year,
    genres,
    ratingKinopoisk,
    ratingImdb,
    description,
  } = movie;

  const { addToWatchList } = useActions();

  const onClickWatchListButton: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.stopPropagation();
    handleClickWatchListButton(movie);
  };

  const handleClickWatchListButton = (movie: IMovie) => {
    addToWatchList(movie);
  };

  return (
    <>
      <Link to={`/film/${movie.kinopoiskId}`}>
        <div
          className="movie-sliderr"
          style={
            {
              "--movie-poster": `url(${posterUrl})`,
            } as React.CSSProperties
          }
        >
          <h1>{nameOriginal ? nameOriginal : nameRu}</h1>
          <div className="movie-information">
            <span>{year}</span>
            <div className="dot"></div>
            <div className="age-limit">+16</div>
            <div className="dot"></div>
            <span>{ratingKinopoisk}</span>
            <div className="dot"></div>
            <div className="IMDb-block">
              <img src={IMDb} alt="IMDb-logo" />
              <span>{ratingImdb}/10</span>
            </div>
          </div>
          <div className="genres">
            {genres?.map(({ genre }) => (
              <div key={genre}>{genre}</div>
            ))}
          </div>
          <div className="actors-img">
            <img src={actor} alt="" />
            <img src={actor} alt="" />
            <img src={actor} alt="" />
            <img src={actor} alt="" />
            <img src={actor} alt="" />
          </div>
          <p>
            {description ? (
              description
            ) : (
              <span>
                داستان مادری که پس از فروپاشی خانواده‌اش در یک حادثه طی
                دیکتاتوری نظامی در سال 1971 و در برزیل، باید دوباره روی پای خودش
                بایستد تا...
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
      </Link>
    </>
  );
}
export default Slide;
