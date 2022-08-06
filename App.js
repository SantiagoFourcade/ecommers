import React from "react"

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Counter from "./components/Contador/counter";
import ItemDetailsContainer from "./components/ItemDetailsContainer/ItemDetailsContainer";



function App() {

const handleOnAdd = (quantity) => {
  console.log("la cantidad agregada es: ${quantity}")
}

  return (
    <div>
      <Navbar />
      <Counter stock={15} onAdd={handleOnAdd}/>
      <ItemDetailsContainer />
      <ItemListContainer hey="" />
    </div>
  );
}

export default App;
