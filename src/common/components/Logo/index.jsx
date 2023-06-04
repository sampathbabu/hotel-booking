import { Link } from "react-router-dom";
import LogoImage from "../../../assets/Logo.png";
const Logo = () => {
  return (
    <Link to={"/"}>
      <img
        src={LogoImage}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        alt={"imageLogo"}
      />
    </Link>
  );
};
export default Logo;
