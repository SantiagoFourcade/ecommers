import React from "react"
import {useState, useEffect} from "react"
import "./itemListContainer.css"
import { getProducts } from "../../asyncMock"

const ItemListContainer = ({hey}) => {
    const [products, setProducts] = useState([])
console.log(products)
    useEffect (() => {
        getProducts().then(products => {
            setProducts(products)
        })
    }, [])

    

    return (
        <>
        <h1>{hey}</h1>
        <ul>
            {products.map(prod => <li key={prod.id}>{prod.name}</li>)}
        </ul>
        </>
    )
}

export default ItemListContainer
