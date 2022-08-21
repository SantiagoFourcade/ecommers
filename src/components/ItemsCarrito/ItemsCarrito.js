import "./ItemsCarrito.css"
import { useContext } from "react"
import CartContext from "../../context/CartContext"


const ItemsCarrito = ({id, name, quantity, price}) => {
    const {deleteItem} = useContext(CartContext)

    const handleDelete = (id) => {
        deleteItem(id)
    }

    return (
        <article class="ItemsCarritoCard">
            <header class="ItemsCarritoHeader">
                <h2 class="ItemsCarritoTitle">
                    {name}
                </h2>
            </header>
            <section class="ItemsCarritoContainer">
                <p class="ItemsCarritoConInfo">
                    Cantidad: {quantity}
                </p>
                <p class="ItemsCarritoConInfo">
                    Precio x Unidad: ${price}
                </p>
                
            </section>
            <footer class="ItemsCarritoConFooter">
                <p class="ItemsCarritoConInfo">
                    Subtotal: ${price*quantity}
                </p>
                <button class="ItemsCarritoBtn" onClick={() => handleDelete(id)}>X</button>
            </footer>
        </article>
    )
}


export default ItemsCarrito