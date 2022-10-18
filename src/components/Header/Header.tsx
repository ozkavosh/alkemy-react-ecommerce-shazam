import "./Header.scss";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import CartWidget from "../CartWidget/CartWidget";

const Header = () => {
  return (
    <header className="header">
      <img
        src={require("../../img/logo.png")}
        alt="Shazam logo"
        className="headerLogoImg"
      />
      <form className="headerSearch">
        <input
          type="text"
          name="search"
          className="searchInput"
          placeholder="Buscar..."
        />
        <div className="searchInputButton">
            <FaSearch/>
        </div>
      </form>
      <div className="headerButtons">
        <div className="headerAccount">
          <FaRegUserCircle />
          <h4>Mi Cuenta</h4>
        </div>
        <CartWidget />
      </div>

      <div className="helperTab">
        <h3>Arma tu pc</h3>
      </div>
    </header>
  );
};

export default Header;
