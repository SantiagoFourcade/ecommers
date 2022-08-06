import React from "react";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetails from "../ItemDetails/ItemDetails";

const ItemDetailsContainer = () => {

  const [product, setProduct] = useState ()

  useEffect(() => {
    getProductById("1").then(product => {
      setProduct(product)
    })
    .catch(error => {
        console.log(error)
    })
  }, [])

 return (
    <div>
        <h1>Detalle</h1>
        <ItemDetails {...product}/>
    </div>
 )
}

export default ItemDetailsContainer;
