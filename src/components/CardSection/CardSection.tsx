import Cards from "../Cards/Cards";
import Crumbs from "../Crumbs/Crumbs";
import "../../containers/Layout/Layout.scss";
import "../CardSection/CardSection.scss";
import type { IMovie } from "../../types/movies.types";
import { Select } from "antd";
import { useMemo, useState } from "react";
interface CardSectionProps {
  cards: IMovie[];
}
function CardSection({ cards }: CardSectionProps) {
  const [sort, setSort] = useState("year");
  const SortMovies = (cards: IMovie[]) => {
    return [...cards].sort((a, b) => {
      return a[sort] - b[sort];
    });
  };
  const sortedMovies = useMemo(() => {
    return SortMovies(cards);
  }, [cards, sort]);
  return (
    <section className="cardsection">
      <div className="container">
        <Select
          value={sort}
          onChange={(value: string) => {
            setSort(value);
          }}
        >
          <Select.Option value="year">year</Select.Option>
          <Select.Option value="ratingKin opoisk">
            ratingKinopoisk
          </Select.Option>
          <Select.Option value="ratingImdb">ratingImdb</Select.Option>
        </Select>
        <Crumbs style={{ marginBottom: "24px" }} />
        <Cards cards={sortedMovies} />
      </div>
    </section>
  );
}

export default CardSection;
