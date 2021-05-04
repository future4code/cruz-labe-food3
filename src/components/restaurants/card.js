import React from "react";
import image from "../../images/image.png"
import {MainContainer, Photo, Align, Name, Description, Price, Add} from "./styled"


const Card = () => {

return <div>
<MainContainer>
<Photo><img src={image}/></Photo>
<Align> <Name >Bullger</Name>
<Description>Pão, carne, queijo e picles.</Description>
<Price>R$20,00</Price>
<Add>Adicionar</Add>
</Align>
</MainContainer>
</div>
}

export default Card