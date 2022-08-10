import React from "react";
import "./Navbar.css";
import Cartwidget from "../CartWidget/Cartwidget";
//import Button from "../Button/button";
import {Link} from "react-router-dom"


const Navbar = () => {
  //const handleClick = () => {};
  return (
    <>
    <header>
      <div class="logo">
    <Link to="/"><img src="img/Auris.png" alt="" /></Link>
          <h1 class="name">
            Ecommers
          </h1>
          </div>
          <div class="nav">
          <button class="Option">
            Sign Up
          </button>
          <Cartwidget />
          </div>
          
    </header>
    <nav className="Navbar">
      <div class="container">
       
        <div class="menu">
          <Link to="/category/Gamer" class="Option">Gamer</Link>
          <Link to="/category/Normal" class="Option">Normal</Link>
          <Link to="/category/Noise Cancelling" class="Option">Noise Cancelling</Link>
          <Link to="/category/Headphones" class="Option">Headphones</Link>
          
        </div>
        
      </div>
    </nav>
    </>
  );
};

export default Navbar;
