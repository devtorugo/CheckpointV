import Image from "next/image";
import "./styles.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-column" id="footer-1">
                    <Image src="/ifood-43.png" alt="logo salesforce" width={90} height={70}/>
                    <div className="redes-sociais">
                        <a href="">
                            <img src="/LogoFace.webp" alt="facebook" width={20} height={20}/>
                        </a>
                        <a href="">
                            <Image src="/tt.png" alt="twitter" width={20} height={20}/>
                        </a>
                        <a href="">
                            <Image src="/instagram-Logo.png" alt="twitter" width={20} height={20}/>
                        </a>
                    
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <p>Ifood</p>
                        <a href="">Site Institucional</a>
                        <a href="">Fale conosco</a>
                        <a href="">Carreira</a>
                        <a href="">Entregadores</a>
                    </div>
                    <div className="footer-column">
                        <p>Descubra</p>
                        <a href="">Cadastre seu Restaurante ou mercado</a>
                        <a href="">iFood Shop</a>
                        <a href="">iFood Card</a>
                        <a href="">Blog iFood</a>
                    </div>
                  
                </div>
            </footer>
        </>
    );
};

export default Footer;