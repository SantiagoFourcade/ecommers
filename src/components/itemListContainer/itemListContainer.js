import React from "react"
import {useState, useEffect} from "react"
import "./itemListContainer.css"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({hey}) => {
    const [products, setProducts] = useState([])

    useEffect (() => {
        getProducts().then(products => {
            setProducts(products)
        })
    }, [])

    

    return (
        <>
        <h1>{hey}</h1>
       <ItemList products={products} />
        </>
    )
}

export default ItemListContainer
