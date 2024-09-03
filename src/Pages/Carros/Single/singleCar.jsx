import React from "react";
import { Container, Descricaot, H1, H2, Hdescr, Image, Main, Texto } from "./styleSingle";
import { FaCar, FaCrosshairs, FaPaintBrush } from "react-icons/fa";

export default function SingleCar({marca, nome, ano, cor, cambio, picture, texto}){
    return(
        <>
            <Main>
                <Container>
                    <div>
                        <H1>{marca}</H1>
                        <H2>{ano}</H2>
                        <Descricaot>
                            <FaCar/><Hdescr>{nome}</Hdescr>
                            <FaCrosshairs/><Hdescr>{cambio}</Hdescr>
                            <FaPaintBrush/><Hdescr>{cor}</Hdescr>
                        </Descricaot>
                    </div>
                    <Image src={picture} alt="foto" />
                </Container>
                <Texto>
                    <H2>Mais Informações:</H2>
                    <p>
                        {texto}
                    </p>
                </Texto>
            </Main>
        </>
    );
}
