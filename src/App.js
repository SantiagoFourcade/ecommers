import React from "react"
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailsContainer from "./components/ItemDetailsContainer/ItemDetailsContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {CartContextProvider} from "./context/CartContext"


function App() {


  return (
    <div class="App">
      <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer hey="Todos los productos" />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer hey="Listado Filtrado"/>}/>
          <Route path="/detail/:productId" element={<ItemDetailsContainer />}/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
