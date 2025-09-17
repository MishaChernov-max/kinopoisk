import { Button } from "antd";
import "./SocialButton.scss";
interface SocialButtonProps {
  logo: string;
}

function SocialButton({ logo }: SocialButtonProps) {
  return (
    <Button type="link" className="social-button">
      <img src={logo} alt="social-icon" />
    </Button>
  );
}

export default SocialButton;
