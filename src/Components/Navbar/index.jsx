import React from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./style";

export default function NavBar(){
    return(
        <>
            <Nav>
                <NavMenu>
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
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to={"/entrar"}>Entrar</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}
