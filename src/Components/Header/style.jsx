import styled from "styled-components";

export const HeaderModif = styled.header`
    background: #23232e;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
    height: 110px;
`
export const Logo = styled.img`
    width: 130px;
    margin-left: 100px;
    border-radius: 100px;
`
export const Container = styled.div`
    height: 100px;
    display: none;
    background-color: #23232e; 
    margin-right: 50px;

        @media screen and (max-width: 768px){
        display: block;
    }


    > svg {
        position: absolute;
        color: white;
        width: 30px;
        height: 30px;
        margin-top: 32px;
        margin-right: 32px;
        cursor: pointer;
    }
`;
