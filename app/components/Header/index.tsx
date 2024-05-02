import React from 'react';
import './styles.css';
import Link from "next/link";
 
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="ifood-43.png" alt="logo ifood" width={100} height={70}/>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="../produtos">Produtos</a></li>
                    <li><a href="../contato">Contato</a></li>
                    <li><a href="../sobre">Sobre nós</a></li>
                
                </ul>
            </nav>
            <div className="content">
                <div className="buscador">
                    <input type="text" placeholder="Buscar serviços..." />
                </div>
                <div className="botoes">
        
                    <Link href={'/caastrar'}><button className="botao-cadastrar">Cadastrar</button></Link>
                </div>
            </div>
        </div>
    );
};
 
export default Header;
 