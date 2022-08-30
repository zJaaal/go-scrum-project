import { useNavigate } from "react-router-dom";
import "./Header.styles.css";
const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
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
      <div style={{ display: "flex" }}>
        <div style={{ paddingRight: "10px" }}>
          {localStorage.getItem("username")}
        </div>
        <div onClick={handleLogout}>X</div>
      </div>
    </header>
  );
};

export default Header;
