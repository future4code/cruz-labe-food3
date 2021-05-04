import React from "react";
import { ContainerFooter } from "./styled";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

export default function Footer({ home, cart, profile }) {
  return (
    <ContainerFooter>
      <HomeOutlinedIcon color={home && "primary"} style={{ fontSize: "40" }} />
      <ShoppingCartOutlinedIcon
        color={cart && "primary"}
        style={{ fontSize: "40" }}
      />
      <PersonOutlineOutlinedIcon
        color={profile && "primary"}
        style={{ fontSize: "40" }}
      />
    </ContainerFooter>
  );
}
