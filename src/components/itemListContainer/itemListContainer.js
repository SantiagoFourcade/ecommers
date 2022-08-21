import React from "react"
import {useState, useEffect} from "react"
import "./itemListContainer.css"
//import { getProducts, getProductsByCategory} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import {useParams} from "react-router-dom"
import {getDocs, collection, query, where} from "firebase/firestore"
import {dataBase} from "../../Servicios/Firebase"

const ItemListContainer = ({hey}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams ()

//LO RESUMIDO CON CAMBIO DE NOMBRE EN FUNCION

useEffect(() => {
    setLoading(true)

    const collectionFb = !categoryId ? collection(dataBase, "Products") : query(collection(dataBase, "Products"), where("category", "==", categoryId))

    getDocs(collectionFb).then(response => {
        const productsFb = response.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data}
        })
        setProducts(productsFb)
    }).catch(error=> {
        console.log(error)
    }).finally(() => {
        setLoading(false)
    })

    //USANDO API CASERA
    //const asyncFunction = categoryId ? getProductsByCategory : getProducts
    //asyncFunction(categoryId).then(products => {
      //  setProducts(products)
    //}).catch(error => {
      //  console.log(error)
    //})
}, [categoryId])

if(loading) {
    return <h1>Cargando productos...</h1>
}

//LA LOGICA

    //useEffect (() => {
        //if (!categoryId) {
            //getProducts().then(products => {
            //    setProducts(products)
          //  })
        //} else {
        //getProductsByCategory(categoryId).then(products => {
        //    setProducts(products)
        
      //  })
    //}
    //}, [categoryId])

    

    return (
        <>
        <h1>{hey}</h1>
       <ItemList products={products} />
        </>
    )
}

export default ItemListContainer
