import Cta from "../Cta.jsx";
import { BENEFICIOS } from "../dados.js";

export default function Beneficios() {
  return (
    <section className="sec beneficios">
      <div className="wrap benef-grid">
        <div className="benef-art">
          <img src="./img/capa-nova.png" alt="" aria-hidden="true" width="1055" height="1491" loading="lazy" />
        </div>
        <div>
          <h2>Tudo o que você precisa para a prova, em um acesso só.</h2>
          <ul className="bullets">
            {BENEFICIOS.map((b) => <li key={b}>{b}</li>)}
          </ul>
          <Cta />
        </div>
      </div>
    </section>
  );
}
