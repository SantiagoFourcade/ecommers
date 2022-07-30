import React from "react"
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Counter from "./components/Contador/counter";

function App() {

const handleOnAdd = (quantity) => {
  console.log("la cantidad agregada es: ${quantity}")
}

  return (
    <div>
      <Navbar />
      <Counter stock={15} onAdd={handleOnAdd}/>
      <ItemListContainer hey="Hola Adrian" />
    </div>
  );
}

export default App;
