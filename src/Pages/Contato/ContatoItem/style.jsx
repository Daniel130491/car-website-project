import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #faebd7;
    padding: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-family: Courrier, monospace, sans-serif;

        &:hover{
            color: gray;
        }

        > svg {
            color: #fff;
            margin-right: 10px;
        }
`
