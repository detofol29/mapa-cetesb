// Conteúdo da página. Tudo aqui foi conferido no PDF (sumário nas pp. 2-3, mapas nas pp. 4-151) e no Edital CETESB nº 02/2026 (FCC).

export const PRODUTO = {
  nome: "Mapa da Aprovação CETESB 2026 · Técnico Administrativo",
  totalMapas: 148,
  paginas: 151,
  concurso: "Concurso Público CETESB 2026 · Técnico Administrativo",
  edital: "Edital nº 02/2026 · FCC",
};

// Nota final = média ponderada: Conhecimentos Básicos peso 1, Conhecimentos Específicos peso 2 (edital, item 9.2).
export const PARTES = [
  {
    n: "Básicos", titulo: "Língua Portuguesa", mapas: 24, questoes: 10, peso: 1, nota: "≈ 11%", cor: "amarelo",
    temas: [
      "Ortografia, acentuação e crase",
      "Compreensão e interpretação de textos",
      "Gêneros textuais e contexto histórico",
      "Denotação, conotação e figuras de linguagem",
      "Tipos de discurso e intertextualidade",
      "Classes, estrutura e formação de palavras",
      "Pontuação e pronomes",
      "Concordância nominal e verbal",
      "Regência, vozes do verbo e tempos verbais",
      "Coordenação, subordinação e conectivos",
      "Reescrita de frases",
    ],
  },
  {
    n: "Básicos", titulo: "Matemática e Raciocínio Lógico", mapas: 20, questoes: 10, peso: 1, nota: "≈ 11%", cor: "laranja",
    temas: [
      "Frações, decimais, potências e raízes",
      "MMC e MDC",
      "Porcentagem e juros simples e compostos",
      "Razão, proporção e regra de três",
      "Equações de 1º e 2º grau e sistemas",
      "Grandezas, medidas, tabelas e gráficos",
      "Proposições, tabela-verdade e negação",
      "Argumentação e diagramas lógicos",
      "Sequências e princípio da regressão",
    ],
  },
  {
    n: "Básicos", titulo: "Informática", mapas: 16, questoes: 5, peso: 1, nota: "≈ 6%", cor: "rosa",
    temas: [
      "Hardware, software e Windows 11",
      "Word, Excel e PowerPoint 2024",
      "Navegadores, Outlook e e-mail",
      "Nuvem, Teams e Google Meet",
      "Malware, golpes, senhas, backup e LGPD",
      "Inteligência artificial no trabalho",
    ],
  },
  {
    n: "Básicos", titulo: "Noções de Administração Pública", mapas: 18, questoes: 5, peso: 1, nota: "≈ 6%", cor: "roxo",
    temas: [
      "Estrutura organizacional e departamentalização",
      "Teorias das organizações",
      "Gestão pública × gestão privada",
      "Princípios da Administração Pública",
      "Gestão de resultados e avaliação de desempenho",
      "Planejamento, contratos e terceirizados",
      "Gestão por processos, projetos e qualidade",
      "Motivação, liderança e processo decisório",
    ],
  },
  {
    n: "Específicos", titulo: "Conhecimentos Específicos", mapas: 70, questoes: 30, peso: 2, nota: "≈ 67%", cor: "azul",
    temas: [
      "Direito Administrativo (16 mapas)",
      "Administração Geral (6 mapas)",
      "Gestão Estratégica (5 mapas)",
      "Gestão de Pessoas (9 mapas)",
      "Comportamento Organizacional (8 mapas)",
      "Administração de Materiais e Logística (13 mapas)",
      "Lei nº 13.303/2016, arts. 28 a 90 (10 mapas)",
      "Ética no Serviço Público (3 mapas)",
    ],
  },
];

// Imagens geradas por scripts/gerar_previas.py
export const AMOSTRAS = [
  { n: 1, legenda: "Mapa 01 · Ortografia oficial" },
  { n: 17, legenda: "Mapa 17 · Concordância verbal" },
  { n: 29, legenda: "Mapa 29 · Juros simples e compostos" },
  { n: 39, legenda: "Mapa 39 · Tabela-verdade e equivalências" },
  { n: 50, legenda: "Mapa 50 · Excel 2024: conceitos e fórmulas" },
  { n: 73, legenda: "Mapa 73 · Gestão por processos" },
  { n: 83, legenda: "Mapa 83 · Ato administrativo: requisitos" },
  { n: 91, legenda: "Mapa 91 · Princípios expressos (LIMPE)" },
  { n: 109, legenda: "Mapa 109 · Recrutamento" },
  { n: 128, legenda: "Mapa 128 · Curva ABC e prioridades" },
  { n: 138, legenda: "Mapa 138 · Lei 13.303: dispensa de licitação" },
  { n: 148, legenda: "Mapa 148 · Integridade e conflito de interesses" },
].map((a) => ({ ...a, src: `./img/mapa-${String(a.n).padStart(3, "0")}.webp` }));

export const DORES = [
  "Edital com 12 áreas e prova já em fevereiro",
  "Conhecimentos Específicos valendo peso 2",
  "Lê a Lei 13.303 seca, relê e esquece os valores",
  "Teorias de administração que se misturam na cabeça",
  "Excel, Word e IA cobrados nas versões 2024",
  "Resumo próprio que nunca termina",
];

export const ANATOMIA = [
  { titulo: "Título, subtítulo e conceito-chave", texto: "O tema explicado no topo da página: você pega o fio da meada antes dos detalhes.", ico: "🔑" },
  { titulo: "Blocos coloridos, tabelas e fluxos", texto: "O conteúdo dividido em colunas visuais, quadros comparativos e passos: a memória grava a estrutura, não o texto corrido.", ico: "🧩" },
  { titulo: "Como cai e cuidado", texto: "O jeito que a FCC cobra o tema e a pegadinha marcada antes da prova, não na correção.", ico: "⚠️" },
  { titulo: "Passo mental e para fixar", texto: "Perguntas rápidas para destravar a questão na hora, o lembre rápido e as três frases para revisar em segundos.", ico: "✅" },
];

export const PERFIS = [
  { titulo: "Trabalha o dia inteiro e estuda à noite", texto: "Um tema por página, direto ao ponto, no tempo que cabe na sua rotina." },
  { titulo: "Vai fazer a prova de 21 de fevereiro", texto: "O conteúdo programático do Edital nº 02/2026 da CETESB, na ordem das áreas, sem adaptação genérica." },
  { titulo: "Já travou na Lei 13.303/2016", texto: "Os arts. 28 a 90 (licitações e contratos nas estatais) destrinchados em 10 mapas, com valores e prazos em destaque." },
  { titulo: "Confunde as teorias da administração", texto: "Clássica, burocracia, relações humanas, sistêmica e contingencial: cada abordagem no seu mapa, com o Cuidado que evita a troca." },
  { titulo: "Faz resumo próprio e não termina nunca", texto: "Os 148 mapas já estão prontos. Use as horas que sobram para resolver questões da FCC." },
  { titulo: "Gosta de estudar no papel ou na tela", texto: "Formato A4, feito para ler no celular/computador ou imprimir nítido e anotar por cima." },
];

export const BENEFICIOS = [
  "100% baseado no Edital CETESB nº 02/2026 (FCC): Conhecimentos Básicos e Específicos de Técnico Administrativo",
  "148 mapas em 151 páginas: um tema do edital por página, com a base legal no rodapé",
  "70 mapas só de Conhecimentos Específicos, a parte de peso 2 que vale 2/3 da nota",
  "Lei 13.303/2016 (arts. 28 a 90) mapeada em 10 mapas: licitação, dispensa, contratos e sanções",
  "A pegadinha de prova destacada no bloco Cuidado de cada mapa",
  "Sumário clicável: toque no tema e vá direto ao mapa",
  "Formato A4 para ler no celular, tablet, computador ou imprimir e anotar",
];

export const INCLUI = [
  { b: "148 mapas mentais", t: "de uma página, cobrindo as 12 áreas do edital" },
  { b: "70 mapas de Conhecimentos Específicos", t: "a parte de peso 2, que vale 2/3 da nota" },
  { b: "24 de Português e 20 de Matemática e Raciocínio Lógico", t: "as 20 questões básicas que mais pesam" },
  { b: "16 de Informática e 18 de Administração Pública", t: "do Windows 11 e Office 2024 à gestão por processos" },
  { b: "Sumário clicável", t: "toque no tema e vá direto ao mapa" },
  { b: "Formato A4", t: "para celular, computador ou impressão" },
];

export const PASSOS = [
  { titulo: "Pague com Pix ou cartão", texto: "Pagamento único e seguro, processado pela plataforma de pagamento." },
  { titulo: "Receba no seu e-mail", texto: "Assim que o pagamento é aprovado, o acesso ao PDF chega no e-mail da compra. Confira também o spam." },
  { titulo: "Estude onde quiser", texto: "Abra no celular, no computador ou imprima em A4 quantas vezes quiser para o seu estudo." },
];

export const FAQ = [
  { p: "Está atualizado para o edital da CETESB de 2026?", r: ["Sim. Os 148 mapas foram produzidos a partir do conteúdo programático do Edital nº 02/2026 da CETESB (banca FCC), para o emprego de Técnico Administrativo, seguindo a legislação vigente na publicação do edital."] },
  { p: "Serve para todos os polos de Técnico Administrativo?", r: ["Sim. O conteúdo programático do edital é o mesmo para todos os polos do emprego (Grande São Paulo, Bauru, Campinas, Mogi Guaçu, Presidente Prudente, Ribeirão Preto, São José do Rio Preto e Sorocaba)."] },
  { p: "Em que formato recebo o material?", r: ["Um único PDF de 151 páginas em formato A4, com sumário clicável. Abre no celular, no tablet e no computador, e imprime nítido."] },
  { p: "Como e quando recebo o acesso?", r: ["Logo após a confirmação do pagamento, o acesso chega no e-mail informado na compra. No Pix, a confirmação costuma ser imediata; no cartão, assim que a operadora aprova."] },
  { p: "Já estudo por cursinho ou apostila. Serve para mim?", r: ["Serve, e é o uso mais comum: a teoria apresenta o conteúdo, o mapa fixa. Principalmente na Lei 13.303/2016 e nas teorias de administração, você ganha velocidade para revisar cada tema em minutos."] },
  { p: "Mapa pronto funciona? Não é melhor fazer o meu?", r: ["Fazer um bom mapa leva horas por tema, e o edital rende 148 mapas em 12 áreas. Com o mapa pronto, você anota por cima do seu jeito e usa essas horas para fazer questões."] },
  { p: "O material garante aprovação?", r: ["Não. Nenhum material garante aprovação, que depende do seu estudo, da concorrência e da prova. Os mapas ajudam a organizar e a revisar com mais eficiência.", "Eles também não substituem a leitura do edital e dos textos normativos oficiais."] },
  { p: "Tem vínculo com a CETESB ou com a FCC?", r: ["Não. É um material independente e autoral, sem vínculo com a CETESB (Companhia Ambiental do Estado de São Paulo), com a Fundação Carlos Chagas (FCC) ou com qualquer órgão público. Os exemplos \"como cai\" são criados por nós e não são questões de provas anteriores."] },
  { p: "Posso imprimir ou compartilhar?", r: ["Pode imprimir para o seu estudo pessoal. O arquivo é individual: não é permitido revender, redistribuir ou publicar o material."] },
  { p: "Quais são as formas de pagamento?", r: [] }, // preenchida com o CONFIG em Faq.jsx
  { p: "Como funciona a garantia?", r: ["Você tem 7 dias corridos a partir da compra para pedir o reembolso integral pela plataforma de pagamento, sem precisar justificar."] },
];

// Fontes oficiais do mapa 91: CF/1988, art. 37 (planalto.gov.br) e Constituição do Estado de São Paulo, art. 111 (al.sp.gov.br).
export const TEXTO_LEI = [
  "CONSTITUIÇÃO FEDERAL DE 1988",
  "Art. 37. A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência e, também, ao seguinte:",
  "§ 1º A publicidade dos atos, programas, obras, serviços e campanhas dos órgãos públicos deverá ter caráter educativo, informativo ou de orientação social, dela não podendo constar nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores públicos.",
  "CONSTITUIÇÃO DO ESTADO DE SÃO PAULO",
  "Artigo 111 - A administração pública direta, indireta ou fundacional, de qualquer dos Poderes do Estado, obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade, razoabilidade, finalidade, motivação, interesse público e eficiência.",
];
