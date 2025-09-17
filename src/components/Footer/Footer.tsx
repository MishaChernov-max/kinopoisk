import { Flex, Menu, type MenuProps } from "antd";
import SocialButton from "../SocialButton/SocialButton";
import { Footer } from "antd/es/layout/layout";
import TelegramLogo from "../../assets/SociaIcons/Telegram.svg?url";
import XLogo from "../../assets/SociaIcons/X.svg?url";
import WhatsApp from "../../assets/SociaIcons/WhatsApp.svg?url";
import FaceBook from "../../assets/SociaIcons/FaceBook.svg?url";
import YouTube from "../../assets/SociaIcons/YouTube.svg?url";

function CustomFooter() {
  const footeritems: MenuProps["items"] = [
    {
      key: "5",
      label: "DMCA",
    },
    {
      key: "6",
      label: "Отказ от ответсвенности",
    },
    {
      key: "7",
      label: "О нас",
    },
    {
      key: "8",
      label: "Разработчики",
    },
  ];
  return (
    <>
      <Footer
        style={{
          textAlign: "center",
          marginTop: "auto",
          backgroundColor: "#020618",
        }}
      >
        <div className="container">
          <Menu
            theme="dark"
            mode="horizontal"
            items={footeritems}
            className="footer-menu"
          />
          <div className="demo-logo" />
          <Flex
            gap="12px"
            justify="center"
            align="center"
            style={{ marginTop: "16px" }}
          >
            <SocialButton logo={TelegramLogo} />
            <SocialButton logo={XLogo} />
            <SocialButton logo={WhatsApp} />
            <SocialButton logo={FaceBook} />
            <SocialButton logo={YouTube} />
          </Flex>
        </div>
      </Footer>
    </>
  );
}
export default CustomFooter;
