import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductList from "../ProductList/ProductList";
import Register from "../Register/Register";

const MainNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categoria/:category" element={<ProductList/>} />
      <Route path="/marca/:brand" element={<ProductList/>} />
      <Route path="/producto/:id" element={<ProductDetail/>} />
      <Route path="/carrito" element={<Cart/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/registro" element={<Register />} />
      <Route path="/404/" element={<NotFound/>}/>
      <Route path="*" element={<Navigate to="/404"/>}/>
    </Routes>
  );
};

export default MainNavigation;
