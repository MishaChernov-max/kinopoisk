import { Layout, theme } from "antd";
import CustomHeader from "../components/Header/Header";
import { Content } from "antd/es/layout/layout";
import CustomFooter from "../components/Footer/Footer";
import Cards from "../components/Cards/Cards";
import "../App.css";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";
import StatusWrapper from "../components/StatusWrapper/StatusWrapper";

const SearchResult = () => {
  const { data, loading, error, query } = useSelector(
    (state: RootState) => state.search
  );
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <CustomHeader />
      <div>
        <Layout
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Content className="main">
            <StatusWrapper isMovieError={error} isMovieLoading={loading}>
              <div className="container">
                {data.length ? (
                  <Cards cards={data} />
                ) : (
                  <h1>По вашему запросу {query} ничего не найдено</h1>
                )}
              </div>
            </StatusWrapper>
          </Content>
        </Layout>
      </div>
      <CustomFooter />
    </>
  );
};
export default SearchResult;
