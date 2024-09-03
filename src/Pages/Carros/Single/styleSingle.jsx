import styled from "styled-components";
import Fundo from "../../../Assets/Images/fundoCar2.png"

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    background-image: url(${Fundo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 400px;
    width: 100%;
    margin-bottom: 250px;
    text-align: center;
    }
`

export const Image = styled.img`
    position: absolute;
    border: 30px solid #fff;
    box-shadow: 4px 4px 20px black;
    width: 500px;
    height: 350px;
    margin: 250px auto;
    object-fit: cover;

    @media screen and (max-width: 768px){
        width: 300px;
        height: 350px;
        object-fit: contain;
        background-color: white;
    }
`
export const Texto = styled.text`
    text-align: center;
    width: 900px;
    margin: 20px;
    padding: 10px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;

    @media screen and (max-width: 768px){
        width: auto;
    }
`
export const H1 = styled.h1`
    color: #fff;
    text-shadow: 1px 1px 2px black;
    font-size: 4rem;
    margin: 10px 0;

        @media screen and (max-width: 768px){
            font-size: 2.5rem;
        }
`

export const H2 = styled.h2`
        color: #E51F45;
        text-shadow: 1px 1px 2px black;
`
export const Descricaot = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family:'Courier New', Courier, monospace;
    font-size: 20px;

    >svg{
        color: #E51F45;
        filter: drop-shadow(0 0 8px white);
    }
`
export const Hdescr = styled.h4`
    color: #fff;
    text-shadow: 1px 1px 2px black;
    margin: 10px;
`
