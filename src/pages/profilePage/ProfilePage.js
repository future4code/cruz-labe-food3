import React from "react";
import EditIcon from "../../images/edit-icon.png";
import CardOrder from "./CardOrder";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {
  MainContainer,
  DataContainer,
  AddressContainer,
  EditContainer,
  OrdersHistoryContainer,
  FooterContainer,
} from "./styled";
const ProfilePage = () => {
  return (
    <>
      <MainContainer>
        <Header name={"Perfil"} />
        <DataContainer>
          <EditContainer>
            <p> {"Paula Lopes"}</p>
            <button>
              <img src={EditIcon} />
            </button>
          </EditContainer>
          <p>{"email"}</p>
          <p>{"numero"}</p>
          <AddressContainer>
            <p>Endereço cadastrado</p>
            <p>{"Endereço"}</p>
            <button>
              <img src={EditIcon} />
            </button>
          </AddressContainer>
        </DataContainer>
      </MainContainer>
      <OrdersHistoryContainer>
        <p>Histórico de Pedidos</p>
        <CardOrder />
      </OrdersHistoryContainer>
      <FooterContainer>
        <Footer profile />
      </FooterContainer>
    </>
  );
};

export default ProfilePage;
