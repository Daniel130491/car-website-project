import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Carros from "../Pages/Carros";
import Contato from "../Pages/Contato";
import Sobre from "../Pages/Sobre/Index";
import Entrar from "../Pages/Entrar";
import { carros } from "../Utils/cars";
import SingleCar from "../Pages/Carros/Single/singleCar";


export default function Rotas(){
    return(
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Carros/>} path="/carros"/>
            <Route element={<Contato/>} path="/contato"/>
            <Route element={<Sobre/>} path="/sobre"/>
            <Route element={<Entrar/>} path="/entrar"/>
            

            {carros.map(item =>{
                return(
                    <Route key={item.id} element={
                                <SingleCar  
                                    nome={item.nome} 
                                    ano={item.ano} 
                                    valor={item.valor}
                                    foto={item.foto}
                                    picture={item.picture}
                                    marca={item.marca}
                                    texto={item.text}
                                    cambio={item.cambio}
                                    cor={item.cor}
                                />
                            } 
                        path={item.path}
                    />
                )
            })}
        </Routes>
    )
}
