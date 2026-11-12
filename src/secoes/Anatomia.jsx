import Cta from "../Cta.jsx";
import { ANATOMIA } from "../dados.js";

export default function Anatomia() {
  return (
    <section className="sec anatomia">
      <div className="wrap">
        <div className="centro">
          <h2>Um mapa mental para cada tema do edital.</h2>
          <p className="lead">Todos os 148 mapas seguem o mesmo roteiro. Em poucas páginas você aprende a ler qualquer um.</p>
        </div>
        <div className="anat-grid">
          <img src="./img/mapa-058.webp" alt="Mapa 58, Malware e golpes, mostrando todas as partes de um mapa" width="954" height="1349" loading="lazy" />
          <ol className="anat-lista">
            {ANATOMIA.map((a, i) => (
              <li key={a.titulo}>
                <span className="num">{i + 1}</span>
                <div>
                  <h3>
                    <span aria-hidden="true">{a.ico}</span> {a.titulo}
                  </h3>
                  <p>{a.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <p className="centro frase">Você não precisa montar nada. Abra o tema de hoje e aprenda.</p>
        <div className="centro"><Cta /></div>
      </div>
    </section>
  );
}
