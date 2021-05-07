import React, { useState } from "react";

import { Add } from "./styled";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: "80vw",
    padding: "5vw",
    backgroundColor: "white",
    border: "2px spliod #000000",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  formControl: {
    minWidth: "65vw",
    margin: "15px 0px",
  },
  selectEmpty: {
    margin: "15px 0px",
  },
  align: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "none",
    border: "0",
    color: "#5cb646",
    padding: "0",
  },
}));

export default function ModalQuantity({
  item,
  addCart,
  qtd,
  onChangeSelected,
}) {
  const styles = useStyles();
  const [modal, handleModal] = useState(false);

  const setModal = () => {
    handleModal(!modal);
  };

  return (
    <>
      <Add onClick={setModal}>Adicionar </Add>

      <Modal open={modal} onClose={setModal}>
        <div className={styles.modal}>
          Selecione a quantidade desejada
          <FormControl variant="outlined" className={styles.formControl}>
            <Select
              value={qtd}
              onChange={onChangeSelected}
              displayEmpty
              className={styles.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem selected value={1}>
                1 unidade
              </MenuItem>
              <MenuItem value={2}>2 unidades</MenuItem>
              <MenuItem value={3}>3 unidades</MenuItem>
              <MenuItem value={4}>4 unidades</MenuItem>
              <MenuItem value={5}>5 unidades</MenuItem>
              <MenuItem value={6}>6 unidades</MenuItem>
              <MenuItem value={7}>7 unidades</MenuItem>
              <MenuItem value={8}>8 unidades</MenuItem>
              <MenuItem value={9}>9 unidades</MenuItem>
              <MenuItem value={10}>10 unidades</MenuItem>
            </Select>
          </FormControl>
          <div className={styles.align}>
            <Button className={styles.button} onClick={() => addCart(item)}>
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
