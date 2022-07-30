import React from "react"
import "./Navbar.css";
import Cartwidget from "../CartWidget/Cartwidget";
import Button from "../Button/button";
import Counter from "../Contador/counter";


const Navbar = () => {

const text = "click"
const handClick = () => {
    
}


  return (
    <nav className="Navbar">
      <div class="wrapper">
        <div class="logo">
          <p>logo</p>
          <p>Stellar</p>
          <p>Dream</p>
        </div>
        <div class="menu">
          <Button handClick={handClick} label="Gamer" />
          <Button handClick={handClick} label="Normal" />
          <Button handClick={handClick} label="Noise Canselling" />
          <Button handClick={handClick} label="Headphones" />
        </div>
      </div>
      <Cartwidget />
      <Counter />
    </nav>
  );
};

export default Navbar;
