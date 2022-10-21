import { FaMinusCircle, FaPlusCircle, FaRegTrashAlt } from 'react-icons/fa';
import './CartItem.scss';

const CartItem = () => {
  return (
    <div className="cartItem">
        <div className="itemImage">
            <img src="" alt="" />
        </div>
        <div className="itemDetails">
            <p className="itemName">Mouse Gamer Ziva XP</p>
            <p className="itemQuantity">Cantidad: 1</p>
            <div className="itemActions">
                <FaRegTrashAlt/> | <FaPlusCircle/> | <FaMinusCircle/>
            </div>
        </div>
        <p className="itemPrice">$1500.00</p>
    </div>
  )
}

export default CartItem