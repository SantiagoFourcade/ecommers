import React from "react";
import "./Cartwidget.css";
import {useContext} from "react"
import {Link} from "react-router-dom"
import CartContext from "../../context/CartContext"
import { FaShoppingCart } from "react-icons/fa";


const Cartwidget = () => {

  const {getQuantity} = useContext(CartContext)
  const quantity = getQuantity()

  return (
    <Link to="/Carrito" class="CartWidget">
      <FaShoppingCart/>
      {quantity}
    </Link>
  );
};

export default Cartwidget;
