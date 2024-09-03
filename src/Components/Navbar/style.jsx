import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const Nav = styled.nav`
    background: #23232e;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`
export const NavLink = styled(Link)`
    color: #faebd7;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color: 	#FF6347;
    }

    &:hover{
        color: gray;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: weight;
    font-style: normal;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #8B0000;
    padding: 10px 22px;
    color: #faebd7;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: weight;
    font-style: normal;
    width: 80px;
    text-align: center;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #faebd7;
        color: #010606;
    }
`
