import ProductCard from "./lojaCard"
import "./styles.css";
 
 
const Produtos = ()=> {
    return(
        <>
           <div className="products">
                <h2 className="text-center">Como abrir uma loja no iFood?</h2>
                <div className="product-box">
                        <ProductCard
                            image='https://parceiros.ifood.com.br/images/sections/how-to/step1-restaurante.svg'
                            title="Crie uma conta e cadastre sua loja com CNPJ"
                            desc="Pra isso, vamos precisar do seu nome completo, e-mail e celular. Pra sua loja, tenha em mãos CNPJ, CPF e RG do titular"
                        ></ProductCard>
                        <ProductCard
                            image='https://parceiros.ifood.com.br/images/sections/how-to/step2-restaurante.svg'
                            title="Escolha um plano e assine o contrato"
                            desc="Escolha um plano disponível. Vamos então validar suas informações e em poucos minutos você recebe o contrato pra assinar"
                        ></ProductCard>
                   
                        <ProductCard
                            image='https://parceiros.ifood.com.br/images/sections/how-to/step3-restaurante.svg'
                            title="Configure sua loja e tá pronto pra começar no iFood!"
                            desc="Preencha conta bancária, cardápio e afins, e estará tudo pronto para ativar sua loja"
                        ></ProductCard>
                      
                   
                </div>
           </div>
        </>
    )
}
 
export default Produtos;