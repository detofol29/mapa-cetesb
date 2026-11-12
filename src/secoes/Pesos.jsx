import { PARTES } from "../dados.js";

export default function Pesos() {
  return (
    <section className="sec pesos">
      <div className="wrap">
        <div className="centro">
          <h2>
            Os Conhecimentos Específicos valem <span className="hl">2/3 da sua nota</span>.
          </h2>
          <p className="lead">
            A prova objetiva tem 60 questões: 30 de Conhecimentos Básicos (peso 1), sendo 10 de Língua Portuguesa, 10 de
            Matemática e Raciocínio Lógico, 5 de Informática e 5 de Noções de Administração Pública, e 30 de Conhecimentos
            Específicos (peso 2). Por isso o material dedica 70 dos 148 mapas aos Específicos.
          </p>
        </div>
        <div className="partes">
          {PARTES.map((p) => (
            <article key={p.n} className={`parte c-${p.cor}`}>
              <header>
                <div>
                  <small>{p.n}</small>
                  <h3>{p.titulo}</h3>
                </div>
                <span className="parte-n"><b>{p.mapas}</b>mapas</span>
              </header>
              <p className="parte-peso">
                {p.questoes} questões · peso {p.peso} · <b>{p.nota} da nota</b>
              </p>
              <ul className="chips">
                {p.temas.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="centro pesos-redacao">🎯 Regra do edital: aprovação exige média ponderada igual ou superior a 5,00, e só os 140 mais bem classificados seguem habilitados (não há redação).</p>
      </div>
    </section>
  );
}
