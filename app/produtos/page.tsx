import React from 'react';
import './styles.css';

const ProdutosPage: React.FC = () => {
    return (
        <div className="container">
            <div className="produto">
                <img src="burger.png" alt="Hamburguer" />
                <div className="info">
                    <h2>Hambúrguer</h2>
                    <p>2 Hambúrgueres, bacon e cheddar + coca cola</p>
                    <p className="preco">R$ 35,00</p>
                </div>
            </div>
            <div className="produto">
                <img src="pizza.png" alt="Pizza" />
                <div className="info">
                    <h2>Pizza</h2>
                    <p>Pizza quentinha com uma variedade de opções.</p>
                    <p className="preco">R$ 55,00</p>
                </div>
            </div>
            <div className="produto">
                <img src="combinado.png" alt="Japa" />
                <div className="info">
                    <h2>Comida japonesa</h2>
                    <p>Conjunto com 40 peças variadas + temaki brinde</p>
                    <p className="preco">R$ 80,00</p>
                </div>
            </div>
            <div className="produto">
                <img src="tigelaacai.png" alt="Açai" />
                <div className="info">
                    <h2>Açai</h2>
                    <p>Açai a vontade, podendo escolher 6 combinações.</p>
                    <p className="preco">R$ 25,00</p>
                </div>
            </div>
        </div>
    );
}

export default ProdutosPage;
