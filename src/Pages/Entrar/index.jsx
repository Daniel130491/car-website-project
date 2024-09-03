import React from "react";
import { Butao, Entre, Imagem, Input, Nome } from "./style";

export default function Entrar(){
    return(
        <>
            <Imagem>
                <Entre>
                    <Nome>EMAIL</Nome>
                    <Input type="text" placeholder="Insira seu email"/>
                    <Nome>PASSWORD</Nome>
                    <Input type="password" placeholder="Insira sua senha"/>
                    <Butao>Sing in</Butao>
                    <a href="#">Ainda não tenho conta.</a>
                </Entre>
            </Imagem>
        </>
    )
}