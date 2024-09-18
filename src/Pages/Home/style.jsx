import styled from "styled-components";
import Fundo from "../../Assets/Images/calha.jpg";
import { Link } from "react-router-dom";


export const Container = styled.div`
    background-image: url(${Fundo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 600px;
    width: 100%;
`
export const Hom = styled.h1`
    margin: 20px auto;
    max-width: 1200px;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: normal;
    font-size: 60px;
    color: #23232e;
    letter-spacing: .6rem;
    border-bottom: 1px solid red;

    @media screen and (max-width: 768px) {
            text-align: center;
        }
`
export const MainHom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 50px auto;
`
export const Marca = styled.h2`
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-size: 1.5rem;
    color: #292929;
    letter-spacing: .1rem;
`
export const Price = styled.h1`
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-size: 2rem;
    color: #292929;
`
export const GoCar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px;
    background: #23232e;
`
export const Hom2 = styled.h1`
    color: #faebd7;
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: 100;
    font-style: normal;
    font-size: 50px;
    border-bottom: 1px solid red;
    text-align: center;
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
`
export const NavBtnLink = styled(Link)`
    border-radius: 10px;
    background: #8B0000;
    padding: 15px 30px;
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

    @media screen and (max-width: 768px) {
            width: 300px;
            text-align: center;
        }

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #faebd7;
        color: #010606;
    }
`
export const GoSob = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px auto;

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
        > div{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        
`
export const Venha = styled.h3`
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: 100;
    font-style: normal;
    font-size: 2rem;
`
export const Image = styled.div`
    margin: 20px;

        > img {
            width: 30vw;
        }
`
