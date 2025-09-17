import { Layout, theme } from "antd";
import Movie from "../components/Movie/Movie";
import CustomHeader from "../components/Header/Header";
import { Content } from "antd/es/layout/layout";
import CustomFooter from "../components/Footer/Footer";

function MoviePage() {
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
          <Content className="main" style={{ padding: "0" }}>
            <Movie />
          </Content>
        </Layout>
      </div>
      <CustomFooter />
    </>
  );
}
export default MoviePage;
