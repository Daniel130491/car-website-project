import styled from "styled-components";
import Fundo from "../../Assets/Images/fundoCar2.png";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  background-image: url(${Fundo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
  max-width: 45%;

  > h4 {
    font-family: sans-serif;
    font-weight: lighter;
    width: 100%;
    text-align: center;
    color: #faebd7;
    letter-spacing: .07rem;
  }

  > input {
    padding: 10px;
    border: none;
    width: 175px;
    margin: 10px;
  }

  .email {
    width: 390px;
  }
  .areaTexto {
    width: 408px;
    border: none;
    height: 200px;
    margin: 10px;
  }
`;
export const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
  max-width: 45%;

  > h4 {
    font-family: sans-serif;
    width: 100%;
    text-align: center;
    color: #8b0000;
    text-decoration: underline 2px;
    letter-spacing: .1rem;
    color: 	#FF6347;
    text-shadow: 1px 1px black;
  }
    .gmail{
      justify-content: center;
      width: 100%;
    }

  > p {
    text-align: center;
    font-size: 1.2rem;
    color: white;
  }
`;
export const Botao = styled.button`
  width: 414px;
  background-color: #8b0000;
  color: #faebd7;
  border: none;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #faebd7;
    color: black;
  }
`;
export const SocialMedia = styled.h1`
    display: flex;
    justify-content: space-evenly;   
    align-items: center;
    width: 50%;
    cursor: pointer;
    color: #faebd7;
`
