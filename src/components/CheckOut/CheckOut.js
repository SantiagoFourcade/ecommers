import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import { dataBase } from "../../Servicios/Firebase"
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch} from "firebase/firestore"
import { useNavigate } from "react-router-dom"


const CheckOut = () => {

    const [isLoading, setIsLoading] = useState(false)
   const {cart, getQuantity, getTotal, clearCart} = useContext(CartContext)

    const navigate = useNavigate()

    const createOrder = async () => {
        setIsLoading(true)
        try {

            const totalQuantity = getQuantity()
            const total = getTotal()
    
            const objOrder = {
                
                buyer: {
                    Nombre: "Mario",
                    Apellido: "Bros",
                    Telefono: "123456789",
                    adress: "El castillo de la princesa 666"
                },
        
                items: cart, 
                totalQuantity,
                total,
                date: new Date()
        
            }
    
            //Probamos que se genere la orden
    
            //const orderRef = collection(dataBase, "orders")
            //addDoc(orderRef, objOrder).then(response => {
                //console.log(response)
            //})
    
            //Actualizacion de Stock de uno de los productos especificos
    
            //const orderRef = doc(dataBase, "Products", "XYnhIB2EtCWju2t4bh4I")
            //updateDoc(orderRef, {stock: 100}).then(response=> {
              //  console.log(response)
            //})
    
    
            const ids = cart.map(prod => prod.id)
            
    
            const productsRef = collection(dataBase, "Products")
    
            const prodAddFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))
    
            const {docs} = prodAddFirestore
    
            const noStock = []
    
            const batch = writeBatch(dataBase)
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stockDb
    
                const prodAddCart = cart.find(prod=>prod.id === doc.id)
    
                const prodQuantity = prodAddCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    noStock.push({id: doc.id, ...dataDoc})
                }
            })
    
            if(noStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(dataBase, "orders")
                const orderAdd = addDoc(orderRef, objOrder)
    
                console.log("El id de su orden es: +{orderAdd.id}")
                clearCart()
                navigate("/")
            } else {
                console.log("Hay productos que estan fuera de stock")
            }
    

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }

    }

    if(isLoading) {
        return <h1>Se esta generando tu Orden...</h1>
    }

    return (
        <>
        
        <h1>CheckOut</h1>
        <button class="" onClick={createOrder}>Generar Orden</button>
        
        </>
    )
}


export default CheckOut