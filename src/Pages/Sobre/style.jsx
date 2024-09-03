import styled from "styled-components";
import Fundo from "../../Assets/Images/porta.jpg"

export const Sob = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 85%;
    margin: 100px auto;
    font-size: 1.3rem;            
`
export const FirstText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

        > p {
            font-family: "Quicksand", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
            font-size: 1.5rem;
        }

        > img {
        border: 50px solid white;
        box-shadow: 15px 15px 20px black;
        width: 250px;
        height: 250px;
        object-fit: cover;
        transform: rotate(10deg);
        z-index: -1;
    }

        @media screen and (max-width: 768px){
            flex-direction: column;
        }
`
export const SecondText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: right;

        > p {
                font-family: "Quicksand", sans-serif;
                font-optical-sizing: auto;
                font-weight: 400;
                font-style: normal;
                font-size: 1.5rem;
            }

        > img {
        border: 50px solid white;
        box-shadow: -15px 15px 20px black;
        width: 250px;
        height: 250px;
        object-fit: cover;
        transform: rotate(-10deg);
        z-index: -1;
    }

        @media screen and (max-width: 768px){
            flex-direction: column;
    }
`
export const ThirdText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

        > p {
            font-family: "Quicksand", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
            font-size: 1.5rem;
        }

        > img {
            border: 50px solid white;
            box-shadow: 15px 15px 20px black;
            width: 250px;
            height: 250px;
            object-fit: contain;
            transform: rotate(10deg);
            z-index: -1;
        }

        @media screen and (max-width: 768px){
            flex-direction: column;
        }
`
export const H1 = styled.h1`
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
export const MainSob = styled.div`
    background-image: url(${Fundo});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: black;
    background-position: center;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Mvv = styled.div`
    display: flex;
    align-items: center;
    text-align: right;
    margin-top: 100px;

    @media screen and (max-width: 768px){
                flex-direction: column;
            }
`
export const H2 = styled.h2`
    color: #E51F45;
    margin: 20px auto;
    max-width: 1200px;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: normal;
    font-size: 60px;
    letter-spacing: .6rem;
    border-bottom: 1px solid #E51F45;
`
export const Texto = styled.text`
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 1.3rem;
`
