import React from "react";
import Food from "../../assets/images/image.png"
import { CardFood } from "./style"

const CardSearch = () => {
  

  return (
    <CardFood>
      <img src={Food} />
      <div>
        <p>Bullguer Eldorado</p>
        <span>
          <p>30 - 45 min</p>
          <p>Frete R$6,00</p>
        </span>
      </div>
    </CardFood>
  );
};

export default CardSearch