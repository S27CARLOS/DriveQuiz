const quizData = [
    {
      pergunta: "Qual a função da placa de regulamentação?",
      opcoes: ["Indicar direções", "Informar serviços", "Impor regras obrigatórias", "Orientar atrações turísticas"],
      correta: 2
    },
    {
      pergunta: "O que é direção defensiva?",
      opcoes: ["Andar rápido", "Evitar multas", "Dirigir com atenção e segurança", "Dirigir só em rodovias"],
      correta: 2
    },
    {
      pergunta: "O que fazer ao ver um acidente com vítima?",
      opcoes: ["Filmar para denunciar", "Remover a vítima", "Sinalizar o local e chamar socorro", "Fugir rapidamente"],
      correta: 2
    },
    {
      pergunta: "O que significa uma placa de fundo azul com letra branca?",
      opcoes: ["Advertência", "Informativa", "Regulamentação", "Obrigatoriedade"],
      correta: 1
    },
    {
      pergunta: "O que fazer ao ver um semáforo amarelo piscante?",
      opcoes: ["Parar completamente", "Ignorar", "Redobrar atenção e seguir com cuidado", "Acelerar"],
      correta: 2
    },
    {
      pergunta: "Qual o nível permitido de álcool no sangue ao dirigir?",
      opcoes: ["0,3 mg/L", "0,5 mg/L", "1,0 mg/L", "0,0 mg/L"],
      correta: 3
    },
    {
      pergunta: "Como agir ao encontrar um pedestre na faixa?",
      opcoes: ["Acelerar", "Buzinar", "Dar passagem", "Desviar dele"],
      correta: 2
    },
    {
      pergunta: "Qual infração é considerada gravíssima?",
      opcoes: ["Usar cinto de segurança", "Estacionar em local proibido", "Dirigir embriagado", "Ultrapassar ciclista"],
      correta: 2
    },
    {
      pergunta: "A quem cabe a responsabilidade de manter o veículo em boas condições?",
      opcoes: ["Ao governo", "Ao fabricante", "Ao condutor/proprietário", "Ao mecânico"],
      correta: 2
    },
    {
      pergunta: "Quando acionar o farol baixo?",
      opcoes: ["Somente à noite", "Apenas na chuva", "Em túneis e rodovias durante o dia", "Nunca é obrigatório"],
      correta: 2
    }
  ];
  
  let perguntaAtual = 0;
  let pontuacao = 0;
  
  const container = document.getElementById("quiz-container");
  const nextBtn = document.getElementById("next-btn");
  const result = document.getElementById("result");
  
  function carregarPergunta() {
    container.innerHTML = "";
    const questao = quizData[perguntaAtual];
