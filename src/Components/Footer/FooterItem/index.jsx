import React from "react";
import { Container } from "./style";

export default function FooterItem({Icon, Text}){
    return(
        <Container>
            <Icon/>
            {Text}
        </Container>
    )
}