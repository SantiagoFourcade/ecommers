import React from "react"
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailsContainer from "./components/ItemDetailsContainer/ItemDetailsContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {CartContextProvider} from "./context/CartContext"
import Carrito from "./components/Carrito/Carrito"
import CheckOut from "./components/CheckOut/CheckOut";
import Form from "./components/Users/Form";


//import {AuthProvider} from "./context/authContext"


function App() {


  return (
    <div class="App">
      
      
      <BrowserRouter>
      <CartContextProvider>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer hey="Nuestros productos" />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer hey="Cargando productos"/>}/>
          <Route path="/detail/:productId" element={<ItemDetailsContainer />}/>
          <Route path="/Carrito" element={<Carrito/>}/>
          <Route path="/CheckOut" element={<CheckOut/>}/>
          <Route path="/Form" element={<Form/>}/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        
        </CartContextProvider>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
