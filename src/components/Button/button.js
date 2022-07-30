import React from "react"



const Button = (props) => {
    return <button onClick={props.handClick} style={{color:props.color}}>{props.label}</button>
}

export default Button