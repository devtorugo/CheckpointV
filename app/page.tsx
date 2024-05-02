import Image from "next/image";
import Conteudo from "./components/Conteudo";
import Loja from "./components/Loja";

export default function Home() {
  return (
    <main>
          <Conteudo texth2={""} textp={""} image={"/imagemifood.webp"} alt={"imagem mulher"} />
          <Loja />
    </main>
  );
}
