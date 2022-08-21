import React, {useEffect, useContext} from "react";
import CartContext from "../../context/CartContext";
import "./FinalCompra.css";

const FinalCompra = () => {
    const {cart, setcart, setQnt} = useContext(CartContext);
    const deleteProduct = (index) => {
        setcart(cart.filter((product, i) => i !== index));
    };
    useEffect (() => {
        setQnt(
            cart
            .map((product) => product.quantity)
            .reduce((total, valor) => total + valor)
        );
    }, [cart, setQnt]);

    return (
        <div clas="fcContainer">
            <div clas="fcTitulo">
                <h1>Carrito</h1>
            </div>
            <table class="table">
                <thead class="tableData">
                    <tr>
                        <th>Cantidad</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={index}>
                            <th>{item.quantity}</th>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>${item.quantity * item.price}</td>
                            <td>
                                <button class="fcBtn" onClick={() => deleteProduct(index)}>X</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FinalCompra