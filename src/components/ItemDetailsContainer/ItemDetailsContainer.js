import React from "react";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetails from "../ItemDetails/ItemDetails";
import {useParams} from "react-router-dom"

const ItemDetailsContainer = () => {

  const [product, setProduct] = useState ()
  const {productId} = useParams()

  useEffect(() => {
    getProductById(productId)
      .then(product => {
        setProduct(product)
      })
      .catch(error => {
        console.log(error)
      })
  },[productId])

 return (
    <div>
        <h1>Detalle</h1>
        <ItemDetails {...product}/>
    </div>
 )
}

export default ItemDetailsContainer;
