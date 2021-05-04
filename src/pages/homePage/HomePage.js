import React from 'react'
import { MainContainer } from '../loginPage/styled'
import { Header } from './style'
import { TextField } from "@material-ui/core";

const HomePage = () => {

    return (
        <MainContainer>
            <Header>
                FutureEats
            </Header>
            <TextField
                label={"Restaurante"}
                placeholder={"Restaurante"}
                variant={"outlined"}
                type={"text"}
                required
                fullWidth
            />
        </MainContainer>
    )
}

export default HomePage