import "./Header.scss";
import { useState, useEffect, useRef } from "react";
import {
  FaList,
  FaRegCommentDots,
  FaRegUserCircle,
  FaSearch,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";

const Header = () => {
  const [show, setShow] = useState(false);
  const categoriesButtonRef = useRef(null);

  useEffect(() => {
    const handleOutsideMenuClick = (e: MouseEvent) => {
      if (e.target === categoriesButtonRef.current) return;
      setShow(false);
    };

    if (show) {
      document.addEventListener("click", handleOutsideMenuClick);
    } else {
      document.removeEventListener("click", handleOutsideMenuClick);
    }
  }, [setShow, show]);

  return (
    <header className="header">
      <Link to="/">
        <img
          src={require("../../img/logo.png")}
          alt="Shazam logo"
          className="headerLogoImg"
        />
      </Link>
      <form className="headerSearch">
        <input
          type="text"
          name="search"
          className="searchInput"
          placeholder="Buscar..."
        />
        <button type="submit" className="searchInputButton">
          <FaSearch />
        </button>
      </form>
      <div className="headerButtons">
        <div className="headerAccount">
          <FaRegUserCircle />
          <h4>Mi Cuenta</h4>
        </div>
        <CartWidget />
      </div>

      <div className="helperTab">
        <button ref={categoriesButtonRef} className="btnCategories" onClick={() => setShow(prev => !prev)}>
          { show ? <AiOutlineClose/> : <FaList />} Categorías
        </button>

        <Link to="/constructor" className="buildLink">
          <h3>Arma tu pc</h3>
        </Link>

        <button className="btnSupport">
          <FaRegCommentDots /> Chatear con soporte
        </button>
      </div>

      <CategoriesMenu show={show} />
    </header>
  );
};

export default Header;
