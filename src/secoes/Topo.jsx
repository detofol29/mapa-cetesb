import { CONFIG } from "../config.js";

export default function Topo() {
  return (
    <div className="offerbar">
      CETESB 2026 · PROVA <b>{CONFIG.dataProva.slice(0, 5)}</b> · EDITAL JÁ MAPEADO
    </div>
  );
}
