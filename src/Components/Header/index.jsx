import React, { useState } from "react";
import { Container, HeaderModif, Logo} from "./style";
import NavBar from "../Navbar";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar";


export default function HeaderComponent(props){
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    
    return(
        <>
            <HeaderModif>
                <a href="/"><Logo src={props.foto} alt="logo"/></a>
                <Container>
                    <FaBars onClick={showSidebar} />
                    {sidebar && <Sidebar active={setSidebar} />}
                </Container>
                <NavBar/>
            </HeaderModif>
        </>
    )
}
