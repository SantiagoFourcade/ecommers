import React from "react"
import {useState, useEffect} from "react"
import "./itemListContainer.css"
import { getProducts, getProductsByCategory} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import {useParams} from "react-router-dom"

const ItemListContainer = ({hey}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams ()
//LO RESUMIDO CON CAMBIO DE NOMBRE EN FUNCION

useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId).then(products => {
        setProducts(products)
    }).catch(error => {
        console.log(error)
    })
}, [categoryId])



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
