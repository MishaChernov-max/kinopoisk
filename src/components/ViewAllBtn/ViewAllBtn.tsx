import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
interface ViewAllBtnProps {
  text?: string;
}
function ViewAllBtn({ text = "Просмотреть все" }: ViewAllBtnProps) {
  return (
    <Button type="text" className="info-btn">
      <LeftOutlined />
      <p>{text}</p>
    </Button>
  );
}
export default ViewAllBtn;
