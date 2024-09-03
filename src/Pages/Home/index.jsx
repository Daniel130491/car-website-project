import React from "react";
import { Container, GoCar, GoSob, Hom, Hom2, Image, MainHom, Marca, NavBtn, NavBtnLink, Price, Venha } from "./style";
import { vehicles } from "../../Utils/cars";
import { Descricao, H4, Imagem, NavLink, Produto, RodapeProduto, Year } from "../Carros/style";
import { FaArrowAltCircleRight, FaCar, FaCrosshairs, FaPaintBrush } from "react-icons/fa";
import Into from "../../Assets/Images/interior.jpg"

export default function Home(){
    return(
        <>
            <Container/>
            <Hom>Destaques</Hom>
            <MainHom>  
                {vehicles.map(item => {
                    return(
                        <>
                            <Produto key={item.id}>
                                <Imagem key={item.foto} src={item.foto} alt="foto"/>
                                <Marca key={item.marca}>{item.marca}</Marca>
                                <Year key={item.ano}>{item.ano}</Year>
                                <Descricao>
                                    <FaCar/><H4 key={item.nome}>{item.nome}</H4>
                                    <FaCrosshairs/><H4 key={item.cambio}>{item.cambio}</H4>
                                    <FaPaintBrush/><H4 key={item.cor}>{item.cor}</H4>
                                </Descricao>
                                <RodapeProduto>
                                    <Price key={item.valor}>{item.valor}</Price>
                                    <NavLink key={item.path} to={item.path}><FaArrowAltCircleRight/></NavLink>
                                </RodapeProduto>
                            </Produto>
                        </>
                    )
                })}
            </MainHom>
            <GoCar>
                <Hom2>Veja Nosso Catálogo</Hom2>
                <NavBtn>
                    <NavBtnLink to={"/carros"}>IR PARA CATÁLOGO</NavBtnLink>
                </NavBtn>
            </GoCar>
            <GoSob>
                <Image>
                    <img src={Into} alt="imagem" />
                </Image>
                <div>
                    <Hom>Clássicos Eternos</Hom>
                    <Venha>VENHA CONHECER A CARLIFE</Venha>
                    <NavBtn>
                        <NavBtnLink to={"/sobre"}>SOBRE NÓS</NavBtnLink>
                    </NavBtn>
                </div>
            </GoSob>
        </>
    )
}
