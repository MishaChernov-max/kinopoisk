import { Layout, theme } from "antd";
import "./Layout.scss";
import InfoPanel from "../../components/InfoPanel/InfoPanel";
import CardSection from "../../components/CardSection/CardSection";
import Slider from "../../components/Slider/Slider";
import CustomHeader from "../../components/Header/Header";
import CustomFooter from "../../components/Footer/Footer";
import useMoviesFetching from "../../hooks/useMoviesFetching";
import Pagination from "../../components/Pagination/Pagination";
import ShowMoreBtn from "../../components/ShowMoreBtn/ShowMoreBtn";

const { Header, Content, Footer } = Layout;
const LayoutComponent: React.FC<{ children: React.ReactNode }> = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { loading, error, data } = useMoviesFetching();

  const movies = data;
  console.log(movies.length);
  return (
    <Layout className="layout">
      <CustomHeader />
      <div>
        <Layout
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Content className="main">
            <div className="container">
              <InfoPanel
                action="Дополнительная информация"
                info="Этот сайт отображает только информацию о фильмах и сериалах и не содержит никакого контента. Информация получена из общедоступных API и ссылок на скачивание с Almas Movie."
                statement="Отказ от ответственности"
              />
              {movies?.length && <Slider movies={movies} />}
            </div>
            {error && <h1>Возникла ошибка...</h1>}
            {loading ? (
              <h1>Идет загрузка...</h1>
            ) : movies?.length ? (
              <CardSection cards={movies} />
            ) : (
              <h1 className="movieerror">Фильмов нету</h1>
            )}
            <ShowMoreBtn />
            <Pagination totalpages={5} />
            <hr className="hr" />
          </Content>
        </Layout>
      </div>
      <CustomFooter />
    </Layout>
  );
};

export default LayoutComponent;
