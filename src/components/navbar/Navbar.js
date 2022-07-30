import React from "react"
import "./Navbar.css";
import Cartwidget from "../CartWidget/Cartwidget";
import Button from "../Button/button";
import Counter from "../Contador/counter";


const Navbar = () => {
  const handleClick = () => {};
  return (
    <nav className="Navbar">
      <div class="container">
        <div class="logo">
          <img src="img/nano2.png" alt="" />
        </div>
        <div class="menu">
          <h1>
            Crazy<swap>Robot</swap>
          </h1>
          
            <Button handClick={handleClick} label="Gamer" />
            <Button handClick={handleClick} label="Normal" />
            <Button handClick={handleClick} label="Noise Cancelling" />
            <Button handClick={handleClick} label="Headphones" />
          
        </div>
        <Cartwidget />
      </div>
      
    </nav>
  );
};

export default Navbar;
