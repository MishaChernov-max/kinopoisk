import Slider from "../Slider/Slider";
import "./SimilarMovies.scss";
import type { IMovie } from "../../types/movies.types";

export type SimilarMoviesType = {
  items: IMovie[];
};
function SimilarMovies({ items }: SimilarMoviesType) {
  return (
    <>
      <section className="similar-movies">
        <div className="similar-container">
          <h2>Похожие фильмы</h2>
          {items?.length ? <Slider movies={items} /> : <h1>Фильмов нету</h1>}
        </div>
      </section>
    </>
  );
}
export default SimilarMovies;
