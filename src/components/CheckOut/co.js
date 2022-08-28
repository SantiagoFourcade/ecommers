import { useState, useContex } from "react";
import CartContext from "../../context/CartContext"
import {dataBase} from "../../Servicios/Firebase"
import {addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const {cart, getQuantity, getTotal, clearCart} = useContex(CartContext)
    
    const navigate = useNavigate()

    const totalQuantity = getQuantity()
    const total = getTotal()

    const createOrder = async () => {
        setIsLoading(true)
        try {
            const objOrder = {
                buyer: {
                    nombre: "Mario",
                    apellido: "Bros",
                    phone: "123456789",
                    address: "El castillo de la princesa 666"
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            }

            const ids = cart.map(prod => prod.id)
            const productsRef = collection(dataBase, "Products")
            const productsAddFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))
            const {docs} = productsAddFromFirestore
            const outOfStock = []
            const batch = writeBatch(dataBase)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddCarrito = cart.find(prod=>prod.id === doc.id)
                const prodQuantity = productAddCarrito?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id,...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(dataBase, "orders")
                const orderAdd = await addDoc(orderRef, objOrder)
                console.log(orderAdd)
                console.log("El id de su orden es: $ {orderAdd.id}")
                clearCart()
                setOrderCreated(true)
                setTimeout(() => {
                    navigate("/")
                }, 3000)
            } else {
                console.log("Hay productos sin stock")
            }

        } catch(error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    if(isLoading) {
        return <h1>Se esta generando su pedido</h1>
    }
    if(orderCreated) {
        return <h1>La orden fue creada con exito, sera redirigido a la lista de productos en unos segundos</h1>
    }
    return (
        <>
        <h1>CheckOut</h1>
        <h2>Formulario</h2>
        <button class="Option" onClick={createOrder}>Generar Orden</button>
        </>
    )
}


export default CheckOut