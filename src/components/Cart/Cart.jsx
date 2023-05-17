import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";
import "./Cart.css";

export const Cart = () => {

  const { cart, clearCart, totalPrice } = useContext(CartContext);
  if(cart.length === 0){
    return (
      <div className="listCart">
        <h1>No hay items en el carrito</h1>
        <Link to="/" className="Option">Volver a Productos</Link>
      </div>
    )
  }
  return (
    <div className="listCart">
      { cart.map(p => <CartItem key={p.id} {...p} />) }
      <h3>Total: ${totalPrice()}</h3>
      <button className="Option" onClick={ () => clearCart() }>Vaciar Carrito</button>
      <Link to="/checkout" className="Option">Checkout</Link>
    </div>
  )
}
