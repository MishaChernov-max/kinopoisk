import LayoutComponent from "./containers/Layout/Layout";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WatchList from "./pages/WatchList";
import SearchResult from "./pages/SearchResult";
import MoviePage from "./pages/MoviePage";
import { Layout } from "antd";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import ErrorPage from "./pages/404page";
function App() {
  return (
    <Provider store={store}>
      <Layout className="layout">
        <Router>
          <Routes>
            <Route path="/" element={<LayoutComponent children={1231} />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/film/:id" element={<MoviePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </Layout>
    </Provider>
  );
}

export default App;
