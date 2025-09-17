import type {
  BoxOfficeType,
  IMovie,
  MoviesRequestParams,
} from "../types/movies.types";
import instance from "./instance";

export type TVideo = {
  url: string;
  name: string;
  site: string;
};
export type TFetchSimilarResponse = {
  total: number;
  items: IMovie[];
};

export type TMoviesVideosResponse = {
  total: number;
  items: TVideo[];
};

export type FilmSearchByFiltersResponse = {
  total: number;
  totalPages: number;
  items: IMovie[];
};

export interface GetBoxOfficeResponse {
  total: number;
  items: BoxOfficeType[];
}

export async function getMovies(params?: MoviesRequestParams) {
  const response = await instance.get<FilmSearchByFiltersResponse>(
    "https://kinopoiskapiunofficial.tech/api/v2.2/films",
    {
      params: {
        order: "NUM_VOTE",
        type: "ALL",
        ...params,
      },
    }
  );
  console.log(response);
  return response;
}

export async function getBoxOffice(kinopoiskId: number) {
  console.log("getBoxOffice", kinopoiskId);
  const response = await instance.get<GetBoxOfficeResponse>(
    `/films/${kinopoiskId}/box_office`
  );
  console.log(response);
  return response.data;
}

export async function getSimilarMovies(id: number) {
  const response = await instance.get<TFetchSimilarResponse>(
    `/films/${id}/similars`
  );
  console.log(response);
  return response;
}

export async function getMovieVideos(id: number) {
  const response = await instance.get<TMoviesVideosResponse>(
    `/films/${id}/videos`
  );
  return response.data;
}

export async function getMovie(id: number) {
  const response = await instance.get<IMovie>(`/films/${id}`);
  return response.data;
}
