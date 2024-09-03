import React from "react";
import { FirstText, H1, H2, MainSob, Mvv, SecondText, Sob, Texto, ThirdText } from "./style";
import Logo from "../../Assets/Images/logoSf.png"
import Antiga from "../../Assets/Images/loja.jpg"
import Atual from "../../Assets/Images/atual.jpg"
import Future from "../../Assets/Images/futureCar.jpg"
import Missao from "../../Assets/Images/missao.png"


export default function Sobre(){
    return(
        <>
            <MainSob>           
                <img src={Logo} alt="logo" />
            </MainSob>
            <Sob>
                <FirstText>
                    
                    <p>
                        <H1>O Início</H1>
                    Fundada ao dia 13 de Abril de 1991, a CarLife, que naquela
                    época chamava-se por <i>Edward's Motor-Sales</i>, foi criada apenas para uma ajuda de custo da família, 
                    Edward não fazia idéia do tamanho que sua pequena loja chegaria, tornando-se futuramente 
                    uma das maiores empresas epecializadas na venda de carros. 
                    Com o passar dos anos o crescimento foi notório, sendo assim não restava outra alternativa a não ser expandi-los.</p>
                    <img src={Antiga} alt="foto" />
                </FirstText>
                <SecondText>
                    <img src={Atual} alt="foto" />
                    <p>
                        <H1>CarLife</H1>
                    No exato dia <i>25 de agosto de 2001</i> inauguramos a nossa primeira loja no <i>Condado de Westchester - Nova York</i>.
                    Com aproximadamente 350 veículos, a nossa inauguração foi um sucesso, 
                    acumulando o recorde de mais de 1330 clientes presentes, efetuamos ainda o incrível recorde de vendas somando 
                    um total de 300 veículos vendidos.</p>
                </SecondText>
                <ThirdText>
                    <p>
                        <H1>O Futuro</H1>
                    E não paramos por aqui, nossa meta é alcançar o maior número de países e clientes possíveis, para isso
                    estamos trabalhando para melhor os atender, contando com uma tecnologia de ponta estruturada com recusos de IA e
                    softwares atualizados e preparados para o futuro. Não perdendo o foco continuamos a vender carros clássicos,
                    porém, agora contando com a tecnologia atual que nos ajudará a atravessar fronteiras.</p>
                    <img src={Future} alt="foto" />
                </ThirdText>
                <Mvv>
                    <img src={Missao} alt="foto" />
                    <div>
                        <H2>MISSÃO</H2>
                            <Texto>Oferecer e proporcionar a comercialização de automóveis e
                            serviços com qualidade e segurança, visando, atendendo as expectativas e
                            necessidades dos nossos 
                            clientes e colaboradores por meio de um relacionamento de 
                            fidelização, satisfação e alegria.</Texto>
                        <H2>VISÃO</H2>
                            <Texto>Ser uma referência de qualidade e inovação no mercado, focando no cliente,
                            de forma a proporcionar as melhores experiências de compra e venda de automóveis
                            com relação aos concorrentes e
                            agregando novos negócios e serviços em nossa região nos próximos anos.</Texto>
                        <H2>VALORES</H2>
                            <Texto><b>Ética:</b> Respeitar as normas, agindo durante as negociações sempre com transparência, 
                            honestidade e integridade.

                            <br/><b>Comprometimento:</b> Ser uma equipe de trabalho comprometida com o cliente e 
                            com os valores da empresa superando as expectativas dos nossos clientes.</Texto>
                     </div>
                </Mvv>
            </Sob>
        </>
    )
}
