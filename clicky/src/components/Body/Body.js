import React from "react";
import "./Body.css";
import Wrapper from "../Wrapper"
import Cards from "../Cards";

const Body = props => (
  <Wrapper>
    {props.cards.map(card => {
      return (
        <Cards
          key={card.id}
          image={card.image}
          handleClick={props.handleClick}
          id={card.id}


        />
      )
    })}

  </Wrapper>

  

);
  

export default Body;
