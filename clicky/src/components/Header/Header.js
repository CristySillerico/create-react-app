import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <p>Clicky Game</p>
    <p>{props.message}</p>
    <p>{`Score: ${props.currentScore} | High Score: ${props.highScore}`}</p>
    
    
  </div>
);

export default Header;