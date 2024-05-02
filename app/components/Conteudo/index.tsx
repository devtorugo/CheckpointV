import React from 'react';
import Link from "next/link";
import { Props } from "./interface";
import './styles.css';
 
const Conteudo = (props: Props) => {
    return (
        <div className="conteudoContainer">
            <h2 className="titulo">Seu negócio pede <br></br>
                 visibilidade pra vender <br></br>mais</h2>
            
            <p className="paragrafo">Com o iFood, você conecta sua loja a milhões de <br></br> novos clientes, expande sua área de entrega e vende <br></br> muito mais.</p>

          
            <div className="imagemContainer">
                <img className="image" src={props.image} alt={props.alt}/>
            </div>
        </div>
    )
}
 
export default Conteudo;