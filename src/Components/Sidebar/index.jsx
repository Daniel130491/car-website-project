import React from 'react'
import { Container, Content, NavLink } from './style'
import { 
  FaTimes, 
  FaHome,
  FaPeopleCarry,
  FaCarSide,
  FaPhoneAlt,
  FaSignInAlt,
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

export default function Sidebar ({ active }) {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <NavLink to={"/"}><SidebarItem Icon={FaHome} Text="Home" /></NavLink>
        <NavLink to={"/carros"}><SidebarItem Icon={FaCarSide} Text="Carros" /></NavLink>
        <NavLink to={"/contato"}><SidebarItem Icon={FaPhoneAlt} Text="Contatos" /></NavLink>
        <NavLink to={"/sobre"}><SidebarItem Icon={FaPeopleCarry} Text="Sobre Nós" /></NavLink>
        <NavLink to={"/entrar"}><SidebarItem Icon={FaSignInAlt} Text="Log In" /></NavLink>
      </Content>
    </Container>
  )
}

