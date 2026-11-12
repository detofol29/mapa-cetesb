import { PERFIS } from "../dados.js";

export default function ParaVoce() {
  return (
    <section className="sec para-voce">
      <div className="wrap">
        <h2 className="centro">Esse material é para você que…</h2>
        <div className="perfis">
          {PERFIS.map((p) => (
            <article key={p.titulo} className="perfil">
              <span className="check" aria-hidden="true">✓</span>
              <div>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
