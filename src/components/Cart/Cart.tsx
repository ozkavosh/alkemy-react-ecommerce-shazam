import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Cart.scss';

const Cart = () => {
  return (
    <main className="cart">
        <div className="container">
            {false ? <><div className="cartItems">
                <h2>Productos en el carrito</h2>
                <ul className="cartItemList">
                    {
                        [...Array(5)].map(item => <CartItem/>)
                    }
                </ul>
            </div>
            <div className="cartResume">
                <h2>Resumen de pedido</h2>
                <hr />
                <div className="cartAmount">
                    <h3>Total:</h3>
                    <h4>$0.00</h4>
                </div>
                <div className="cartButtons">
                    <button className="btnClearCart">
                        Limpiar
                    </button>

                    <button className="btnPurchaseCart">
                        Continuar
                    </button>
                </div>
            </div></> : <div className="emptyCart">
                    <FaCartPlus/>
                    <h2>El carrito aún está vacío!</h2>
                    <Link to="/"><button>Buscar productos</button></Link>
            </div>}
        </div>
    </main>
  )
}

export default Cart