import "./Header.css";
import Logo from "../../image/Rick_and_Morty_Logo_and_Image.png";
function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__image" src={Logo} alt="Рик и Морти" />
      </div>
    </header>
  );
}

export default Header;
