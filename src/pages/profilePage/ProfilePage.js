import React, { useState, useEffect } from "react";
import EditIcon from "../../assets/images/edit-icon.png";
import CardOrder from "./CardOrder";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { ordersHistory } from "../../services/ordersHistory";
import { getProfile } from "../../services/getProfile";
import {
  MainContainer,
  DataContainer,
  AddressContainer,
  EditContainer,
  OrdersHistoryContainer,
  FooterContainer,
  Email,
} from "./styled";
import { goToEditProfilePage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";

const ProfilePage = () => {
  useProtectedPage();
  const [orders, setOrders] = useState([]);
  const [profile, setProfile] = useState({});
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const res = await ordersHistory();

      if (res.status) {
        setOrders(res.data.orders);
      } else {
      }
    })();
  }, [setOrders]);

  useEffect(() => {
    (async () => {
      const res = await getProfile();

      if (res.status) {
        setProfile(res.user);
      } else {
        console.log(res.message);
      }
    })();
  }, []);

  const formatter = Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
  });

  const getListOrders = () => {
    let listOrders =
      orders &&
      orders.map((item) => {
        return (
          <CardOrder
            key={item.id}
            totalPrice={item.totalPrice.toFixed(2)}
            restaurantName={item.restaurantName}
            createdAt={formatter.format(item.createdAt)}
          />
        );
      });
    return listOrders;
  };

  return (
    <>
      <MainContainer>
        <Header name={"Meu perfil"} />
        <DataContainer>
          <EditContainer>
            <p> {profile.name}</p>
            <button>
              <img
                src={EditIcon}
                alt=""
                onClick={() => goToEditProfilePage(history)}
              />
            </button>
          </EditContainer>
          <Email>{profile.email}</Email>
          <p>{profile.cpf}</p>
          <AddressContainer>
            <p>Endereço cadastrado</p>
            <p>{profile.address}</p>
            <button>
              <img src={EditIcon} alt="" />
            </button>
          </AddressContainer>
        </DataContainer>
      </MainContainer>
      <OrdersHistoryContainer>
        <p>Histórico de Pedidos</p>
        {getListOrders()}
      </OrdersHistoryContainer>
      <FooterContainer>
        <Footer profile />
      </FooterContainer>
    </>
  );
};

export default ProfilePage;
