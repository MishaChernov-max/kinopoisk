import { Button, type ButtonProps } from "antd";
import "../../components/CustomerButton/Button.scss";
type CustomerButtonProps = {
  children: string;
  icon: React.ReactNode;
  style: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & ButtonProps;
function CustomerButton({
  children,
  icon,
  onClick,
  ...style
}: CustomerButtonProps) {
  return (
    <Button {...style} className="btn-custom" icon={icon} onClick={onClick}>
      {children}
    </Button>
  );
}
export default CustomerButton;
