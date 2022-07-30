import React from "react"
import "./counter.css"
import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState (0)
    const [text, setText] = useState("Text")

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }

    return (
        <div class="counter">
            <h1>{text}</h1>
            <h1>{count}</h1>
            <button onClick={decrement}>Cancelar</button>
            <button onClick={increment}>Agregar</button>
        </div>
    )
}

export default Counter