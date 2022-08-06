import React from "react";
import "./Navbar.css";
import Cartwidget from "../CartWidget/Cartwidget";
import Button from "../Button/button";
//import Counter from "../Contador/counter";

const Navbar = () => {
  const handleClick = () => {};
  return (
    <>
    <header>
      <div class="logo">
    <img src="img/Auris.png" alt="" />
          <h1 class="name">
            Crazy<swap>Robot</swap>
          </h1>
          </div>
          <div class="nav">
          <button class="">
            Sign Up
          </button>
          <Cartwidget />
          </div>
    </header>
    <nav className="Navbar">
      <div class="container">
       
        <div class="menu">
          <Button handClick={handleClick} label="Gamer" />
          <Button handClick={handleClick} label="Normal" />
          <Button handClick={handleClick} label="Noise Cancelling" />
          <Button handClick={handleClick} label="Headphones" />
        </div>
        
      </div>
    </nav>
    </>
  );
};

export default Navbar;
