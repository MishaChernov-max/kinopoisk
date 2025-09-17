export type StatusWrapperProps = {
  isMovieLoading: boolean;
  isMovieError: string | null;
  children: React.ReactNode;
};
function StatusWrapper({
  isMovieLoading,
  isMovieError,
  children,
}: StatusWrapperProps) {
  if (isMovieLoading) {
    return <h2>Идет загрузка...</h2>;
  }
  if (isMovieError) {
    return <h2>Возникла ошибка...</h2>;
  }
  return <>{children}</>;
}
export default StatusWrapper;
