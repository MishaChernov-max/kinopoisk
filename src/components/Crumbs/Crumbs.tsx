import { Flex } from "antd";
import ViewAllBtn from "../ViewAllBtn/ViewAllBtn";
interface CrumbsProps {
  text?: string;
  style?: React.CSSProperties;
}
function Crumbs({ text = "Последние фильмы", ...props }: CrumbsProps) {
  return (
    <Flex justify="space-between" align="center" {...props}>
      <ViewAllBtn />
      <span style={{ fontSize: "24px", color: "#fff" }}>{text}</span>
    </Flex>
  );
}
export default Crumbs;
