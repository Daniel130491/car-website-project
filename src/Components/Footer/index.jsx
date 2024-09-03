import React from "react";
import { Contact, Image, MainFoot, Nav } from "./style";
import Logo from "../../Assets/Images/logoSf.png";
import FooterItem from "./FooterItem";
import { FaClockRotateLeft, FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { NavBtn, NavBtnLink, NavLink } from "../Navbar/style";

export default function FooterComponent(){
    return(
        <>
            <MainFoot>
                <Contact>
                    <FooterItem Icon={FaWhatsapp} Text="(21)99999-9999"/>
                    <FooterItem Icon={FaClockRotateLeft} Text="De seg à sáb | 09hs às 18hs"/>
                    <FooterItem Icon={FaLocationDot} Text="Mt Pleasant, NY 10595, Estados Unidos"/>
                </Contact>
                <Image>
                    <img src={Logo} alt="logo" />
                </Image>
                <Nav>
                    <NavLink to={"/"}>
                            HOME
                        </NavLink>
                        <NavLink to={"/carros"}>
                            CARROS
                        </NavLink>
                        <NavLink to={"/contato"}>
                            CONTATOS
                        </NavLink>
                        <NavLink to={"/sobre"}>
                            SOBRE
                        </NavLink>
                        <NavBtn>
                            <NavBtnLink to={"/entrar"}>Entrar</NavBtnLink>
                        </NavBtn>
                </Nav>
            </MainFoot>
        </>
    )
}