import { useNavigate } from "react-router-dom";
import "./Header.styles.css";
const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth", {
      replace: true,
    });
  };
  return (
    <header>
      <img
        src="https://raw.githubusercontent.com/alkemyTech/Proyecto-GoScrum/unit05x01/public/img/goscrum.png"
        alt="Logo"
      />
      <div onClick={handleLogout}>X</div>
    </header>
  );
};

export default Header;
