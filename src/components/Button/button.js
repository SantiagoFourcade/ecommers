import React from "react"
import "./button.css"


const Button = (props) => {
    return <button onClick={props.handClick} style={{color:props.color}}>{props.label}</button>
}

export default Button