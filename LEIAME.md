# Site de vendas · Mapa da Aprovação CETESB 2026 · Técnico Administrativo

React + Vite. Página única, com o mesmo design do site da UFMS (ufms.resumosanimados.com.br).
Domínio previsto: https://cetesb.resumosanimados.com.br/ (usado em `og:url` e `og:image` no `index.html`).

## Rodar e publicar
```
npm install
npm run dev        # http://localhost:5173 para editar
npm run build      # gera a pasta dist/
npm run preview    # confere o dist/ antes de subir
```
Também funciona em qualquer hospedagem estática (Vercel, Netlify, Hostinger etc.) subindo o conteúdo de `dist/`.
Os caminhos são relativos, então funciona na raiz do domínio ou em uma subpasta.

## Configuração (`src/config.js`)
1. `checkout`: https://pay.kiwify.com.br/m5AVg4Y. Todos os botões usam esse link e repassam ao checkout os
   parâmetros `utm_*`, `src` e `sck` da visita.
2. `preco` ("R$ 37,90") e `parcelas` ("8x de R$ 5,51"): confira se batem com o que foi configurado na Kiwify.
3. `precoDe`: só preencha se esse preço foi MESMO praticado antes. Preço "de" falso é propaganda enganosa.
4. `razaoSocial` e `cnpj` (GD SOFTWARE · 63.787.420/0001-80) aparecem no rodapé; nas páginas `public/privacidade/` e
   `public/termos/` estão escritos no texto.
5. Meta Pixel (ID 1471245511608851): está no `index.html` e nas páginas `public/privacidade/` e `public/termos/`;
   para trocar, altere nos três. O site envia só PageView. InitiateCheckout e Purchase são disparados pela Kiwify
   no checkout. Não dispare InitiateCheckout no site: duplica.

## Onde fica cada coisa
- Textos, listas, FAQ, amostras da galeria: `src/dados.js`
- Uma seção por arquivo: `src/secoes/`
- Cores e layout: `src/estilos.css`

## Imagens dos mapas
```
py -I scripts/gerar_previas.py "../mapa-cetesb/Mapa da Aprovação CETESB 2026 - Técnico Administrativo.pdf" --capa "../mapa-cetesb/Mapa visual da aprovação na CETESB.png"
```
Gera `public/img/capa-nova.png`, `capa.webp`, `capa.jpg` (a partir de `--capa`; sem ele, da página 1 do PDF) e `mapa-NNN.webp`
(a página de cada mapa é achada pelo texto "MAPA N •"). Sem números extras, gera os 12 da galeria; o mapa 58 (seção
"Um mapa mental para cada tema") é gerado passando `58`. Se mudar os mapas, atualize `AMOSTRAS` em `src/dados.js`.
Requer `pypdfium2` e `Pillow`.

## Dados do edital usados na página
Edital nº 02/2026 (CETESB, FCC), publicado em 10/11/2026: prova objetiva em 21/02/2027 (manhã, 3 horas), 60 questões:
Conhecimentos Básicos peso 1 (Português 10, Matemática e Raciocínio Lógico 10, Informática 5, Noções de Administração
Pública 5) e Conhecimentos Específicos peso 2 (30). Aprovação com média ponderada ≥ 5,00; habilitados até a 140ª posição.
O sumário do PDF cobre todos os tópicos do Anexo III para Técnico Administrativo.
