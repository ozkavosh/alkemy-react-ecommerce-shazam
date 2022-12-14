import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import './CartModal.scss';

type Props = {
  onClick: () => void
}

const CartModal = forwardRef<HTMLDivElement, Props>(({onClick}, ref) => {
  return (
    <div className="cartModal" ref={ref} onClick={onClick}>
        <h2>Carrito</h2>
        <h3>Cantidad de productos: 0</h3>
        <p>Total: $0.00</p>

        <Link to="/carrito"> <button>Ver Detalle</button> </Link>
    </div>
  )
})

export default CartModal