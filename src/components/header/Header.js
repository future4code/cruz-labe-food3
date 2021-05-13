import React from "react";
import { HeaderContainer } from "./styled";
import ButtonHeader from "./ButtonHeader";
import { MainContainer } from "./styled";

export default function Header(props) {
  const renderButton = (name) => {
    if (
      name === "Busca" ||
      name === "Restaurante" ||
      name === "Editar" ||
      name === "Endereço" ||
      name === ""
    )
      return <ButtonHeader />;
  };
  return (
    <>
      <MainContainer>
        <HeaderContainer>
          {renderButton(props.name)}
          <p>{props.name}</p>
        </HeaderContainer>
      </MainContainer>
    </>
  );
}
