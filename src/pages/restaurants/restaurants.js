import React from "react";
import image from "../../images/image.png"
import Card from "../../components/restaurants/card"
import {MainContainer, Photo, Name, Type, Time, Shipping, Adress, H3} from "./styled"


const Restaurants = () => {


return <div>

<MainContainer>
<Photo><img src={image}/></Photo>
<Name >Bullger Vila madalena</Name>
<Type>Burguer</Type>
<Time>50-60 min</Time><Shipping>frete R$6,00</Shipping>
<Adress>R. Fradique-Coutinho, 1136 - Vila Madalena</Adress>
</MainContainer>


<H3>Principais</H3>

<Card/>

<H3>Acompanhamentos</H3>

<Card/>

</div>
}

export default Restaurants