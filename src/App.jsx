import Topo from "./secoes/Topo.jsx";
import Hero from "./secoes/Hero.jsx";
import Dor from "./secoes/Dor.jsx";
import Galeria from "./secoes/Galeria.jsx";
import Anatomia from "./secoes/Anatomia.jsx";
import Comparacao from "./secoes/Comparacao.jsx";
import Pesos from "./secoes/Pesos.jsx";
import ParaVoce from "./secoes/ParaVoce.jsx";
import Beneficios from "./secoes/Beneficios.jsx";
import Oferta from "./secoes/Oferta.jsx";
import Garantia from "./secoes/Garantia.jsx";
import ComoFunciona from "./secoes/ComoFunciona.jsx";
import Faq from "./secoes/Faq.jsx";
import Fecho from "./secoes/Fecho.jsx";
import Rodape from "./secoes/Rodape.jsx";
import BarraFixa from "./secoes/BarraFixa.jsx";

export default function App() {
  return (
    <>
      <Topo />
      <main>
        <Hero />
        <Dor />
        <Galeria />
        <Anatomia />
        <Comparacao />
        <Pesos />
        <ParaVoce />
        <Beneficios />
        <Oferta />
        <Garantia />
        <ComoFunciona />
        <Faq />
        <Fecho />
      </main>
      <Rodape />
      <BarraFixa />
    </>
  );
}
