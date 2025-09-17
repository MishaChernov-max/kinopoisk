export type BoxOfficeType = {
  type: string;
  amount: number;
  currencyCode: string;
  name: string;
  symbol: string;
};
export interface IMovie {
  kinopoiskId: number;
  nameRu: string;
  nameOriginal: string;
  posterUrl?: string;
  logoUrl?: string;
  posterUrlPreview?: string;
  filmLength?: number;
  year?: number;
  description?: string;
  genres: Array<{ genre: string }> | null;
  ratingKinopoisk?: number;
  ratingImdb?: number;
  [key: string]: any;
  boxOffice: BoxOfficeType[];
}

export type MoviesRequestParams = {
  limit?: number;
  page?: number;
  keyword?: string;
  kinopoiskId?: number;
};
export type MoviesResponse = {
  data: { items: IMovie[] };
};
