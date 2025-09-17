import "./Input.scss";
import Search from "antd/es/input/Search";
import { useSearch } from "./useSearch";

const CustomSearch: React.FC = () => {
  const { error, onSearch } = useSearch();

  return (
    <>
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{ width: 400 }}
      />
      {error && <h1>Произошла ошибка при поиске {error}</h1>}
    </>
  );
};

export default CustomSearch;
