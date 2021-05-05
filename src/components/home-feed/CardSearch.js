import React, { useContext } from "react";
import { CardFood } from "./style"

const CardSearch = ({ restaurants }) => {

  return (<>
    {restaurants.map(data => 
      <CardFood>
        <img src={data.logoUrl} />
        <div>
          <p>{data.name}</p>
          <span>
            <p>{Math.floor(data.deliveryTime/2)} - {data.deliveryTime} min</p>
            <p>Frete R${data.shipping},00</p>
          </span>
        </div>
      </CardFood>
     )
    }
  </>);
};

export default CardSearch