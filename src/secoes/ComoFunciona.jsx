import { PASSOS } from "../dados.js";

export default function ComoFunciona() {
  return (
    <section className="sec como">
      <div className="wrap">
        <h2 className="centro">Como funciona depois do pagamento</h2>
        <ol className="passos">
          {PASSOS.map((p, i) => (
            <li key={p.titulo} className="passo">
              <span className="num">{i + 1}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
