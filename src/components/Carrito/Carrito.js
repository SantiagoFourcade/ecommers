import "./Carrito.css"
import { useContext } from "react"
import CartContext from "../../context/CartContext"
import ItemsCarrito from "../ItemsCarrito/ItemsCarrito"
import { Link } from "react-router-dom"

const Carrito = () => {
    const {cart, clearCart, getQuantity, getTotal} = useContext(CartContext)

    const totalQuantity = getQuantity()
    const total = getTotal()

    if(totalQuantity === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (
        <div class="Cart">
            <h1>Carrito</h1>
            {cart.map(p=><ItemsCarrito kay={p.id}{...p}/>)}
            <h3>Total:${total}</h3>
            <div class="btnControl">
            <button onClick={() => clearCart()} class="LimpiarCartBtn">Limpiar Carrito</button>
            <Link to="/CheckOut" class="CheackOutBtn">CheckOut</Link>
            </div>
        </div>
    )
}


export default Carrito
