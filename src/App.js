import React from "react"
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Counter from "./components/Contador/counter";

function App() {
  return (
    <div>
      <Navbar />
      <Counter />
      <ItemListContainer hey="Hola Adrian" />
    </div>
  );
}

export default App;
