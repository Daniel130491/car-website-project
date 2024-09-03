import styled from "styled-components";
import Back from "../../Assets/Images/fundoCar.jpg";

export const Entre = styled.div`
    border-radius: 4px;
    width: 300px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 0 auto;
    margin-top: 100px;

    a{
        font-family: "Quicksand", sans-serif;
        color: #8B0000;
    }
`
export const Nome = styled.p`
    font-size: 1.2rem;
    font-family: "Quicksand", sans-serif;
`
export const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: none;

    @media screen and (max-width: 768px){
        width: 83%;
    }
`
export const Butao = styled.button`
    margin: 20px;
    width: 50%;
    border-radius: 4px;
    background: #8B0000;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

    @media screen and (max-width: 768px){
        width: 90%;
    }
`
export const Imagem = styled.div`
    background-image: url(${Back});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 750px;
    padding: 20px 0;
    width: 100%;
`
