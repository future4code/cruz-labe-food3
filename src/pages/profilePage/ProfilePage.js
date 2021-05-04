import React from "react";
import EditIcon from "../../images/edit-icon.png";
import CardOrder from "./CardOrder";
import {
  MainContainer,
  DataContainer,
  AddressContainer,
  EditContainer,
  OrdersHistoryContainer,
} from "./styled";
const ProfilePage = () => {
  return (
    <>
      <MainContainer>
        <DataContainer>
          <EditContainer>
            <p> {"Nome"}</p>
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
    </>
  );
};

export default ProfilePage;
