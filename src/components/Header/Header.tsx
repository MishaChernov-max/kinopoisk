import Flex from "antd/es/flex";
import { Header } from "antd/es/layout/layout";
import SearchBtn from "../Search/SearchBtn";
import CustomSearch from "../Search/CustomSearch";
import { Menu, type MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

function CustomHeader() {
  const navigate = useNavigate();
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "1":
        navigate("/about");
        break;
      case "2":
        navigate("/developers");
        break;
      case "3":
        navigate("/watchlist");
        break;
      case "4":
        navigate("/");
        break;
      default:
        navigate("/");
    }
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "О нас",
    },
    {
      key: "2",
      label: "Разработчики",
    },
    {
      key: "3",
      label: "Список наблюдения",
    },
    {
      key: "4",
      label: "Дом",
    },
  ];

  return (
    <>
      <Header className="header">
        <div className="container">
          <Flex justify={"space-between"} align={"center"}>
            <div className="demo-logo" />
            <div className="search">
              <div>
                <SearchBtn />
              </div>
              <CustomSearch />
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              items={items}
              onClick={handleMenuClick}
            />
          </Flex>
        </div>
      </Header>
    </>
  );
}
export default CustomHeader;
