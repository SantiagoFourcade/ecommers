import React from "react";
import "./Cartwidget.css";
import {useContext} from "react"
import {Link} from "react-router-dom"
import CartContext from "../../context/CartContext"


const Cartwidget = () => {

  const {getQuantity} = useContext(CartContext)
  const quantity = getQuantity()

  return (
    <Link to="/cart" class="CartWidget">
      <img src="img/carrito.png" alt="cart-widget" class="CartWImg" />
      {quantity}
    </Link>
  );
};

export default Cartwidget;
