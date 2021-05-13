import React from "react";
import { ContainerFooter } from "./styled";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import {
  goToHomePage,
  goToMyCartPage,
  goToProfile,
} from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

export default function Footer({ home, cart, profile }) {
  const history = useHistory();

  return (
    <ContainerFooter>
      <HomeOutlinedIcon
        color={home && "primary"}
        style={{ fontSize: "40" }}
        onClick={() => goToHomePage(history)}
      />
      <ShoppingCartOutlinedIcon
        color={cart && "primary"}
        style={{ fontSize: "40" }}
        onClick={() => goToMyCartPage(history)}
      />
      <PersonOutlineOutlinedIcon
        color={profile && "primary"}
        style={{ fontSize: "40" }}
        onClick={() => goToProfile(history)}
      />
    </ContainerFooter>
  );
}
