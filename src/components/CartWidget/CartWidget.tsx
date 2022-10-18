import "./CartWidget.scss";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="headerCartWidget">
      <FaShoppingCart />
      <h4>Mi Carrito</h4>

      <div className="cartWidgetItems">
        <p>0</p>
      </div>
    </div>
  );
};

export default CartWidget;
