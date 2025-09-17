import { useState } from "react";
import cx from "classnames";
import Slide from "./Slide";
import "./Slider.scss";
import { Flex } from "antd";
import type { IMovie } from "../../hooks/useMovies";
import { LeftOutlined } from "@ant-design/icons";
import { RightOutlined } from "@ant-design/icons";
type MovieCarouselProps = {
  dotsCount?: number;
  movies: IMovie[];
  style?: React.CSSProperties;
};

const DOTS_COUNT = 4;

function MovieCarousel({ movies, dotsCount = DOTS_COUNT }: MovieCarouselProps) {
  const [index, setIndex] = useState(0);
  const goNext = () => {
    setIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };
  const goPrev = () => {
    setIndex((prev) => (prev ? prev : movies.length) - 1);
  };
  const setActiveIndex = (currentdot: number) => () => {
    setIndex(currentdot);
  };
  return (
    <>
      <Slide movie={movies[index]}></Slide>
      <Flex align="center" gap={32} className="mt-24">
        <LeftOutlined onClick={goPrev} />
        <Flex gap={16}>
          <div
            className={cx("dot", { isActive: index % dotsCount === 0 })}
            onClick={setActiveIndex(0)}
          ></div>
          <div
            className={cx("dot", { isActive: index % dotsCount === 1 })}
            onClick={setActiveIndex(1)}
          ></div>
          <div
            className={cx("dot", { isActive: index % dotsCount === 2 })}
            onClick={setActiveIndex(2)}
          ></div>
          <div
            className={cx("dot", { isActive: index % dotsCount === 3 })}
            onClick={setActiveIndex(3)}
          ></div>
        </Flex>
        <RightOutlined onClick={goNext} />
      </Flex>
    </>
  );
}

export default MovieCarousel;
