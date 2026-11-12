import { useRef, useState } from "react";
import { AMOSTRAS } from "../dados.js";

export default function Galeria() {
  const [pausado, setPausado] = useState(false);
  const [aberta, setAberta] = useState(null);
  const dialogo = useRef(null);

  const abrir = (a) => {
    setAberta(a);
    dialogo.current?.showModal();
  };

  // a lista é duplicada para o loop contínuo; a cópia fica escondida de leitores de tela e do teclado
  const item = (a, copia) => (
    <figure key={`${a.n}-${copia}`} aria-hidden={copia || undefined}>
      <button type="button" onClick={() => abrir(a)} tabIndex={copia ? -1 : 0} aria-label={`Ampliar ${a.legenda}`}>
        <img src={a.src} alt={copia ? "" : a.legenda} width="954" height="1349" loading="lazy" />
      </button>
      <figcaption>{a.legenda}</figcaption>
    </figure>
  );

  return (
    <section className="sec galeria" id="galeria">
      <div className="wrap centro">
        <h2>Veja alguns dos mapas que você vai receber</h2>
        <p className="lead">Páginas reais, exatamente como você recebe. Toque para ampliar.</p>
      </div>
      <div className={`trilho${pausado ? " pausado" : ""}`}>
        <div className="trilho-in">
          {AMOSTRAS.map((a) => item(a, false))}
          {AMOSTRAS.map((a) => item(a, true))}
        </div>
      </div>
      <div className="centro">
        <button type="button" className="btn-pausa" onClick={() => setPausado((p) => !p)} aria-pressed={pausado}>
          {pausado ? "▶ Continuar" : "❚❚ Pausar"} carrossel
        </button>
      </div>
      <dialog ref={dialogo} className="lightbox" onClick={(e) => e.target === dialogo.current && dialogo.current.close()}>
        {aberta && (
          <figure>
            <img src={aberta.src} alt={aberta.legenda} width="954" height="1349" />
            <figcaption>{aberta.legenda}</figcaption>
          </figure>
        )}
        <form method="dialog">
          <button className="fechar" aria-label="Fechar">✕</button>
        </form>
      </dialog>
    </section>
  );
}
