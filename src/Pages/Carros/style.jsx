import styled from "styled-components";
import Back from "../../Assets/Images/fundoCar.jpg";
import {NavLink as Link} from "react-router-dom";

export const Car = styled.h1`
    margin: 20px auto;
    max-width: 1200px;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: normal;
    font-size: 60px;
    color: #23232e;
    letter-spacing: .6rem;
    border-bottom: 1px solid red;
`
export const MainCar = styled.div`
    margin: 0 auto;
    background-image: url(${Back});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: auto;
    padding: 20px 0;
    width: 100%;
`
export const Catalogo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
export const Produto = styled.div`
    width: 350px;
    margin: 10px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.836);
    border-radius: 15px;
    box-shadow: 10px 5px 5px rgb(90, 90, 90, 0.6);
`
export const Imagem = styled.img`
    width: 300px;
`
export const Year = styled.h3`
    color: #E51F45;
`
export const Descricao = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family:'Courier New', Courier, monospace;
    font-size: meddium;

    >svg{
        color: #E51F45;
    }
`

export const H4 = styled.h4`
    color: rgba(0, 0, 0, 0.726);
    margin: 10px;
`

export const RodapeProduto = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const NavLink = styled(Link)`
    > svg{
        color: #E51F45;
        font-size: 2.5rem;

        &:hover{
            color: black;
        }
    }
`
