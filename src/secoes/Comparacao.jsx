import { useState } from "react";
import { TEXTO_LEI } from "../dados.js";

export default function Comparacao() {
  const [pos, setPos] = useState(50);
  return (
    <section className="sec comparacao">
      <div className="wrap">
        <div className="centro">
          <h2>Texto corrido ou mapa mental?</h2>
          <p className="lead">
            À esquerda, o texto corrido de sempre, o mesmo das leis e constituições intermináveis. À direita, o mapa mental. Arraste e
            compare.
          </p>
        </div>
        <div className="comp" style={{ "--pos": `${pos}%` }}>
          <img src="./img/mapa-091.webp" alt="O mesmo assunto organizado em mapa mental: princípios expressos da Administração Pública (CF/88, art. 37)" width="954" height="1349" loading="lazy" />
          <div className="comp-texto" aria-hidden="true">
            <p className="comp-rotulo">CF/88, art. 37 · Constituição de SP, art. 111</p>
            {TEXTO_LEI.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <div className="comp-linha" aria-hidden="true"><span>⟷</span></div>
          <input
            type="range"
            min="0"
            max="100"
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Arraste para comparar o texto da lei com o mapa mental"
          />
        </div>
        <p className="centro comp-nota">
          O conteúdo é o mesmo, e a norma continua sendo a fonte. <b>A diferença é quanto disso fica na sua memória no dia da prova.</b>
        </p>
        <p className="centro comp-credito">Texto à esquerda: Constituição Federal, art. 37, e Constituição do Estado de São Paulo, art. 111 (fontes públicas). À direita: mapa 91.</p>
      </div>
    </section>
  );
}
