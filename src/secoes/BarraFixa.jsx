import { useEffect, useState } from "react";
import Cta from "../Cta.jsx";
import { CONFIG } from "../config.js";

// No celular: aparece depois que o hero sai da tela e some enquanto a oferta está visível.
export default function BarraFixa() {
  const [heroFora, setHeroFora] = useState(false);
  const [ofertaVista, setOfertaVista] = useState(false);

  useEffect(() => {
    const o1 = new IntersectionObserver(([e]) => setHeroFora(!e.isIntersecting));
    const o2 = new IntersectionObserver(([e]) => setOfertaVista(e.isIntersecting), { threshold: 0.2 });
    o1.observe(document.getElementById("hero"));
    o2.observe(document.getElementById("oferta"));
    return () => {
      o1.disconnect();
      o2.disconnect();
    };
  }, []);

  const on = heroFora && !ofertaVista;
  return (
    <div className={`barra-fixa${on ? " on" : ""}`} inert={!on}>
      <div className="barra-preco">
        <b>{CONFIG.preco}</b>
        <small>ou {CONFIG.parcelas}</small>
      </div>
      <Cta>QUERO OS MAPAS</Cta>
    </div>
  );
}
