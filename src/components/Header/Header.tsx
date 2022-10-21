import "./Header.scss";
import { useState, useEffect, useRef, useCallback } from "react";
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
import CartModal from "../CartModal/CartModal";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const categoriesButtonRef = useRef(null);
  const cartModalRef = useRef(null);
  const categoriesMenuRef = useRef(null);

  const handleCartClick = () => {
    if(showCartModal && cartModalRef.current){
      (cartModalRef.current as HTMLElement).classList.add("hide");
      setTimeout(() => {
        (cartModalRef.current as unknown as HTMLElement).classList.remove("hide");
        setShowCartModal(false);
      }, 300);
    }else if(!cartModalRef.current){
      setShowCartModal(true);
    }
  }

  const handleCategoriesClick = useCallback(() => {
    if(showCategories && categoriesMenuRef.current){
      (categoriesMenuRef.current as HTMLElement).classList.add("hide");
      setTimeout(() => {
        (categoriesMenuRef.current as unknown as HTMLElement).classList.remove("hide");
        setShowCategories(false);
      }, 300);
    }else if(!categoriesMenuRef.current){
      setShowCategories(true);
    }
  }, [showCategories])

  useEffect(() => {
    const handleOutsideMenuClick = (e: MouseEvent) => {
      if (e.target === categoriesButtonRef.current) return;
      handleCategoriesClick();
    };

    if (showCategories) {
      document.addEventListener("click", handleOutsideMenuClick);
    } else {
      document.removeEventListener("click", handleOutsideMenuClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideMenuClick);
    }
  }, [showCategories, handleCategoriesClick]);

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
        <CartWidget onClick={handleCartClick}/>
      </div>

      <div className="helperTab">
        <button ref={categoriesButtonRef} className="btnCategories" onClick={handleCategoriesClick}>
          { showCategories ? <AiOutlineClose/> : <FaList />} Categorías
        </button>

        <Link to="/constructor" className="buildLink">
          <h3>Arma tu pc</h3>
        </Link>

        <button className="btnSupport">
          <FaRegCommentDots /> Soporte
        </button>
      </div>

      { showCategories && <CategoriesMenu ref={categoriesMenuRef}/>}
      { showCartModal && <CartModal onClick={handleCartClick} ref={cartModalRef}/>}
    </header>
  );
};

export default Header;
