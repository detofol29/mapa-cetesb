import { linkCheckout } from "./config.js";

// O evento InitiateCheckout do Meta Pixel é disparado pela Kiwify ao abrir o checkout (com valor e API de Conversões),
// por isso o botão é só um link: disparar aqui também duplicaria o evento.
export default function Cta({ children = "QUERO OS 148 MAPAS", grande = false, className = "" }) {
  return (
    <a className={`btn${grande ? " btn-grande" : ""} ${className}`} href={linkCheckout()}>
      {children}
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
    </a>
  );
}
