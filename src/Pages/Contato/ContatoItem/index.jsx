import React from "react";
import { Container } from "./style";

export default function ContatoItem({Icon, Text}){
    return(
        <Container>
            <Icon/>
            {Text}
        </Container>
    )
}
