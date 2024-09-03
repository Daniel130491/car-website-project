import React from "react";
import {Botao, Div1, Div2, Main, SocialMedia} from "./style"
import { FaFacebook, FaInstagram, FaPhoneVolume, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import ContatoItem from "./ContatoItem";

export default function Contato(){
    return(
        <>
            <Main>
                <Div1>
                    <h4>CONTE-NOS SUA EXPERIÊNCIA COM A CARLIFE</h4>
                    <input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="Sobrenome"/>
                    <input className="email" type="email" placeholder="Email"/>
                    <textarea className="areaTexto" placeholder="Digite aqui sua Mensagem..."/>
                    <Botao>Enviar Mensagem</Botao>
                </Div1>
                <Div2>
                    <h4>Nossos Contatos</h4>
                    <p className="gmail"><i>carlifecorporateemail@email.com</i></p>
                    <SocialMedia><FaWhatsapp/><FaFacebook/><FaInstagram/><FaXTwitter/></SocialMedia>
                    <h4>ou ligue:</h4>
                    <p>
                        <ContatoItem Icon={FaPhoneVolume} Text="(21) 91234-5678"/>
                        <ContatoItem Icon={FaPhoneVolume} Text="(21) 91234-5678"/>
                    </p>
                </Div2>
            </Main>
        </>
    )
}
