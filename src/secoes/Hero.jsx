import { CONFIG, linkCheckout } from "../config.js";

const Check = () => (
  <span className="check" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.4">
      <path d="M4 12.5l5 5 11-11" />
    </svg>
  </span>
);

const AVATARES = [
  "./img/avatar-1.webp",
  "./img/avatar-2.webp",
  "./img/avatar-3.webp",
  "./img/avatar-4.webp",
];

export default function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="wrap hero-grid">
        <span className="badge-pill">
          <span className="dot" aria-hidden="true" /> Mapa da Aprovação · Técnico Administrativo CETESB 2026
        </span>

        <h1>
          Domine o Edital da CETESB e{" "}
          <span className="hero-teal">garanta a aprovação</span> que paga{" "}
          <span className="hero-hl">R$ 5.614 por mês.</span>
        </h1>

        <div
          className="hero-art"
          role="img"
          aria-label="Coleção digital CETESB: capa, mapas visuais e consulta no celular"
        >
          <div className="product-art product-art--hero">
            <img
              className="product-sheet sheet-left"
              src="./img/mapa-091.webp"
              alt=""
              width="954"
              height="1349"
              loading="eager"
            />
            <img
              className="product-sheet sheet-right"
              src="./img/mapa-138.webp"
              alt=""
              width="954"
              height="1349"
              loading="eager"
            />
            <div className="product-book">
              <img
                src="./img/capa.webp"
                alt="Capa do material Mapa da Aprovação CETESB 2026 Técnico Administrativo"
                width="894"
                height="1263"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="product-phone">
              <div className="phone-speaker" />
              <img
                src="./img/capa.webp"
                alt=""
                width="894"
                height="1263"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="hero-copy">
          <p className="lead">
            148 mapas mentais para estudar de forma inteligente, em poucas horas por dia, e garantir sua aprovação no
            dia {CONFIG.dataProva.slice(0, 5)}.
          </p>

          <ul className="hero-bullets">
            <li>
              <Check /> Aprenda mais em menos tempo de cadeira, mesmo trabalhando o dia inteiro
            </li>
            <li>
              <Check /> Cada tema do edital em uma página que o cérebro guarda de verdade
            </li>
            <li>
              <Check /> Pegadinhas da FCC destacadas antes da prova, não na correção
            </li>
          </ul>

          <a href={linkCheckout()} className="btn btn--lg hero-cta">
            QUERO O MAPA DA APROVAÇÃO <span className="arr" aria-hidden="true">→</span>
          </a>

          <div className="uso-linha">
            <div className="uso-avs" aria-hidden="true">
              {AVATARES.map((src) => (
                <img key={src} src={src} alt="" width="44" height="44" loading="lazy" decoding="async" />
              ))}
            </div>
            <p>
              Cobre o edital inteiro, <strong>do Português à Lei 13.303/2016, nas 12 áreas</strong>.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
