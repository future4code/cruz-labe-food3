import React from "react";
import { useHistory } from "react-router";
import { CardFood } from "./style";
import { goToRestaurant } from "../../routes/coordinator";
import useProtectedPage from "../../hooks/useProtectedPage";
import Loading from "../../components/loading/Loading";

const CardSearch = ({ restaurants }) => {
  useProtectedPage();

  const history = useHistory();

  return (
    <>
      {restaurants.map((data) => (
        <CardFood
          key={data.id}
          onClick={() => goToRestaurant(history, data.id)}
        >
          <img src={data.logoUrl} alt="" />
          <div>
            <p>{data.name}</p>
            <span>
              <p>
                {Math.floor(data.deliveryTime / 2)} - {data.deliveryTime} min
              </p>
              <p>Frete R${data.shipping},00</p>
            </span>
          </div>
        </CardFood>
      ))}
    </>
  );
};

export default CardSearch;
