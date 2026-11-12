import { CONFIG } from "../config.js";
import { FAQ } from "../dados.js";

const PAGAMENTO = `Pix ou cartão de crédito: ${CONFIG.preco} à vista ou em até ${CONFIG.parcelas}. Pagamento único, sem mensalidade e sem assinatura. O pagamento é feito em ambiente seguro, na plataforma de pagamento, e os dados do cartão não ficam conosco.`;

export default function Faq() {
  return (
    <section className="sec faq">
      <div className="wrap faq-wrap">
        <h2 className="centro">Perguntas frequentes</h2>
        {FAQ.map((f) => (
          <details key={f.p}>
            <summary>{f.p}</summary>
            <div className="faq-a">
              {(f.r.length ? f.r : [PAGAMENTO]).map((t) => <p key={t}>{t}</p>)}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
