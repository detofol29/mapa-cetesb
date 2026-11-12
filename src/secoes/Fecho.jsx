import Cta from "../Cta.jsx";

export default function Fecho() {
  return (
    <section className="fecho">
      <div className="wrap centro">
        <p className="fecho-olho">A PROVA É DIA 21 DE FEVEREIRO</p>
        <h2>
          As horas de estudo passam. <span className="hl">A vaga na CETESB fica.</span>
        </h2>
        <p className="lead">148 mapas, todo o conteúdo do edital nas 12 áreas, um tema por página.</p>
        <Cta grande />
        <p className="fecho-micro">Acesso imediato · Pagamento único · Garantia de 7 dias</p>
      </div>
    </section>
  );
}
