import React, { useState, useEffect } from "react";
import EditIcon from "../../images/edit-icon.png";
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
import { getActiveOrder } from "../../services/getActiveOrder";

const ProfilePage = () => {
  const [orders, setOrders] = useState([]);
  const [profile, setProfile] = useState({});
  const [hasOrder, setHasOrder] = useState(0);
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

  useEffect(() => {
    (async () => {
      const res = await getActiveOrder();

      if (res.status) {
        setHasOrder(res.order);
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
              <img src={EditIcon} />
            </button>
          </AddressContainer>
        </DataContainer>
      </MainContainer>
      <OrdersHistoryContainer>
        <p>Histórico de Pedidos</p>
        {orders.length === 0 ? (
          <span>Você não realizou nenhum pedido</span>
        ) : (
          getListOrders()
        )}
      </OrdersHistoryContainer>
      <FooterContainer>
        <Footer profile />
      </FooterContainer>
    </>
  );
};

export default ProfilePage;
