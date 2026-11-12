/* =====================================================
   CONFIGURAÇÃO: edite só este bloco antes de publicar
   ===================================================== */
export const CONFIG = {
  // COLE AQUI o link de checkout da Kiwify. Enquanto estiver vazio, os botões levam à seção da oferta.
  checkout: "https://pay.kiwify.com.br/m5AVg4Y",
  preco: "R$ 37,90",              // preço à vista
  parcelas: "8x de R$ 5,51",      // parcelamento configurado na Kiwify
  numParcelas: "8x de",           // parcelas em destaque
  valorParcela: "R$ 5,51",        // valor da parcela em destaque
  precoDe: "",                    // preço anterior REAL (deixe vazio se não existir: preço "de" falso é propaganda enganosa)
  email: "gdsoftwareoficial@gmail.com",
  politica: "./privacidade/",
  termos: "./termos/",
  razaoSocial: "GD SOFTWARE",
  cnpj: "63.787.420/0001-80",
  dataProva: "21/02/2027",
};

/* Link do checkout com os parâmetros de campanha da visita (utm_*, src, sck),
   para a Kiwify saber de qual anúncio veio cada venda. */
export function linkCheckout() {
  if (!CONFIG.checkout) return "#oferta";
  const url = new URL(CONFIG.checkout);
  new URLSearchParams(window.location.search).forEach((valor, chave) => {
    if ((/^utm_/.test(chave) || chave === "src" || chave === "sck") && !url.searchParams.has(chave)) {
      url.searchParams.set(chave, valor);
    }
  });
  return url.toString();
}
