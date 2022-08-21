import React from "react";
import "./ItemDetailsContainer.css"
import { useState, useEffect } from "react";
//import { getProductById } from "../../asyncMock";
import ItemDetails from "../ItemDetails/ItemDetails";
import {useParams} from "react-router-dom"
import {getDoc, doc} from "firebase/firestore";
import { dataBase } from "../../Servicios/Firebase";


const ItemDetailsContainer = () => {

  const [product, setProduct] = useState ()
  const [loading, setLoading] = useState(true)
  const {productId} = useParams()

  useEffect(() => {

    getDoc(doc(dataBase, "Products", productId)).then(response => {
      const data = response.data()
      const productsFb = {id: response.id, ...data}
      setProduct(productsFb)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })





    //getProductById(productId)
      //.then(response => {
        //setProduct(response)
      //})
     //.finally(() => {
      //  setLoading(false)
    //  })
  },[productId])

  //if(loading) {
    //return (
      //<h1>Cargando...</h1>
   // )
  //}

 return (
    <div class="ItemDetailsContainer">
        {loading ? <h1>Cargando...</h1>:<ItemDetails {...product} />}
    </div>
 )
}

export default ItemDetailsContainer;
