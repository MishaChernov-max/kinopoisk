import CustomHeader from "../components/Header/Header";
import "../containers/Layout/Layout.scss";
import CustomFooter from "../components/Footer/Footer";
import WatchListCards from "../components/WatchListSection/WatchListSection";
import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";

function WatchList() {
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
            <WatchListCards />
          </Content>
        </Layout>
      </div>
      <CustomFooter />
    </>
  );
}
export default WatchList;
