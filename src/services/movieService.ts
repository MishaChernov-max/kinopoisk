import { getMovies } from "../api/movies";

export const search = async (query: string) => {
  const { data } = await getMovies({ keyword: query });
  return data;
};
