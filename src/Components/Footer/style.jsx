import styled from "styled-components";

export const MainFoot = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    background: #23232e;

        @media screen and (max-width: 768px){
            flex-direction: column;
        }
`
export const Contact = styled.div`
    margin: 10px;
    width: 300px;
`
export const Image = styled.div`
    margin: 10px;

        > img {
            width: 200px;
            margin: 0 auto;
        }
`
export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 10px;
    width: 300px;
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: weight;
    font-style: normal;

        @media screen and (max-width: 768px) {
                align-items: center;   
            }

        > a {
            margin: 15px;
            color: #faebd7;
        }
`
