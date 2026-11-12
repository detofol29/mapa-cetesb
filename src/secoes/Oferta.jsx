import Cta from "../Cta.jsx";
import { CONFIG } from "../config.js";
import { INCLUI, PRODUTO } from "../dados.js";

export default function Oferta() {
  return (
    <section className="sec oferta" id="oferta">
      <div className="wrap">
        <h2 className="centro">Tudo o que será liberado para você hoje</h2>
        <div className="oferta-card">
          <span className="flash">⚡ 148 MAPAS · 151 PÁGINAS · ACESSO IMEDIATO</span>
          <div className="oferta-grid">
            <img src="./img/capa-nova.png" alt="Capa do material Mapa da Aprovação CETESB 2026 Técnico Administrativo" width="1055" height="1491" loading="lazy" />
            <div>
              <h3>{PRODUTO.nome}</h3>
              <p className="oferta-sub">{PRODUTO.concurso} · {PRODUTO.edital}</p>
              <ul className="recv-list">
                {INCLUI.map((i) => (
                  <li key={i.b}><span><b>{i.b}</b>{i.t && <> {i.t}</>}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="preco-box">
            {CONFIG.precoDe && <p className="preco-de">De <s>{CONFIG.precoDe}</s> por</p>}
            <p className="preco-agora">
              <span className="preco-prefixo">{CONFIG.numParcelas || "8x de"}</span>
              <span>{CONFIG.valorParcela || "R$ 5,51"}</span>
            </p>
            <p className="preco-parc">ou à vista por {CONFIG.preco}</p>
            <Cta grande className="btn-largo">QUERO MEUS 148 MAPAS</Cta>
            <p className="preco-micro">Pagamento único. Sem mensalidade e sem assinatura.<br />Você recebe tudo na hora, direto no seu e-mail.</p>
            <ul className="selos-pgto" aria-label="Formas de pagamento">
              <li>Pix</li><li>Cartão de crédito</li><li>🔒 Compra segura</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
