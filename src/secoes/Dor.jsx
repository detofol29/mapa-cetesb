import { DORES } from "../dados.js";

export default function Dor() {
  return (
    <section className="sec dor">
      <div className="wrap centro">
        <h2>
          Estudar para este concurso <span className="hl">não precisa ser um sofrimento.</span>
        </h2>
        <ul className="dor-chips">
          {DORES.map((d) => (
            <li key={d}>✕ {d}</li>
          ))}
        </ul>
        <p className="lead">
          O caminho é estudar em um formato que o cérebro guarda de verdade: <b>um tema por página, desenhado</b>, com o
          que cai e a pegadinha em destaque.
        </p>
      </div>
    </section>
  );
}
