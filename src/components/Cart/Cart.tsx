import CartItem from '../CartItem/CartItem';
import './Cart.scss';

const Cart = () => {
  return (
    <main className="cart">
        <div className="container">
            <div className="cartItems">
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
            </div>
        </div>
    </main>
  )
}

export default Cart