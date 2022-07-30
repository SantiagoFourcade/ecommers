import React from "react";
import "./counter.css";
import { useState } from "react";

const Counter = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0)
  

  const increment = () => {
    if(count < stock) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if(count > 0) {
        setCount(count - 1)
    }
    
  }

  return (
    <div class="counter">
      
      <h1>{count}</h1>
      <button onClick={decrement}>Cancelar</button>
      <button onClick={increment}>Agregar</button>
      <button onClick={(count) => onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
