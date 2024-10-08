import styled from 'styled-components';
import {NavLink as Link} from "react-router-dom"

export const Container = styled.div`
  background-color: #171923;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 300px;
  right: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  z-index: 999;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    right: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;

export const NavLink = styled(Link)`
     text-decoration: none;
`
