import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./InfoPanel.scss";
interface InfoPanel {
  action: string;
  info: string;
  statement: string;
}
function InfoPanel({
  action = "Hello, world!",
  info = "Этот сайт отображает только информацию о фильмах и сериалах и не размещает никакого контента. Информация поступает из общедоступных API-ИНТЕРФЕЙСОВ и ссылок для скачивания от movie diamond.",
  statement = "Заявление об отказе от отвественности",
}: InfoPanel) {
  return (
    <>
      <div className="infopanel">
        <Button type="text" className="info-btn">
          <LeftOutlined />
          <p>{action}</p>
        </Button>
        <p>{info}</p>
        <p className="statement">{statement}</p>
        <InfoCircleOutlined className="infocircleoutlined" />
      </div>
    </>
  );
}
export default InfoPanel;
