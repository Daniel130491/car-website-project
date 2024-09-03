import React from "react";
import { Car, Catalogo, Descricao, H4, Imagem, MainCar, NavLink, Produto, RodapeProduto, Year } from "./style";
import { carros } from "../../Utils/cars";
import { FaArrowAltCircleRight, FaCar, FaCrosshairs, FaPaintBrush } from "react-icons/fa";
import { Marca, Price } from "../Home/style";


export default function Carros(){

    return(
        <>
            <MainCar>
                <Car>Nossos Veículos</Car>
                <Catalogo>
                    {carros.map(item => {
                        return(
                            <>
                                <Produto>
                                    <Imagem src={item.foto} alt="foto" />
                                    <Marca>{item.marca}</Marca>
                                    <Year>{item.ano}</Year>
                                        <Descricao>
                                            <FaCar/><H4>{item.nome}</H4>
                                            <FaCrosshairs/><H4>{item.cambio}</H4>
                                            <FaPaintBrush/><H4>{item.cor}</H4>
                                        </Descricao>
                                        <RodapeProduto>
                                            <Price>{item.valor}</Price>
                                            <NavLink to={item.path}><FaArrowAltCircleRight/></NavLink>
                                        </RodapeProduto>
                                </Produto>
                            </>
                        )
                    })}
                </Catalogo>
            </MainCar>
        </>
    )
}
