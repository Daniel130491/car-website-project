import React from "react";
import Rotas from "./Routes/router";
import GlobalStyles from './style.jsx';
import HeaderComponent from "./Components/Header/index.jsx"; 
import Logo from './Assets/Images/logoSf.png'
import GoToTop from "./Utils/topo.jsx";
import FooterComponent from "./Components/Footer/index.jsx";



export default function App(){
  return(
    <>
      <HeaderComponent foto={Logo}/>
      <Rotas/>
      <GlobalStyles/>
      <GoToTop/>
      <FooterComponent/>
    </>
  )
}
