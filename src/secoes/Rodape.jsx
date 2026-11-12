import { CONFIG } from "../config.js";
import { PRODUTO } from "../dados.js";

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="wrap">
        <p className="rodape-marca">{PRODUTO.nome}</p>
        <p className="rodape-legal">
          Material de estudo autoral e independente, produzido a partir do Edital CETESB nº 02/2026 e das fontes oficiais indicadas no
          rodapé de cada mapa. Sem vínculo com a CETESB (Companhia Ambiental do Estado de São Paulo), com a Fundação Carlos Chagas
          (FCC) ou com qualquer órgão público. Não substitui a leitura do edital e da legislação. Não garante
          aprovação: os resultados dependem do estudo de cada pessoa.
        </p>
        <nav className="rodape-links" aria-label="Links do rodapé">
          <a href={CONFIG.politica}>Política de privacidade</a>
          <a href={CONFIG.termos}>Termos de uso</a>
          <a href={`mailto:${CONFIG.email}`}>Contato</a>
        </nav>
        <p className="rodape-legal">Este site não é afiliado ao Facebook™, Instagram™ ou Google™.</p>
        <p>© {new Date().getFullYear()} {PRODUTO.nome}. {CONFIG.razaoSocial} · CNPJ {CONFIG.cnpj}</p>
      </div>
    </footer>
  );
}
