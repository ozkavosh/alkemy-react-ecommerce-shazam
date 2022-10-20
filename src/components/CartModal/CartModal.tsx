import { Link } from 'react-router-dom';
import React, { forwardRef } from 'react';
import './CartModal.scss';

const CartModal = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="cartModal" ref={ref}>
        <h2>Carrito</h2>
        <h3>Cantidad de productos: 0</h3>
        <p>Total: $0.00</p>

        <Link to="/carrito"> <button>Ver Detalle</button> </Link>
    </div>
  )
})

export default CartModal