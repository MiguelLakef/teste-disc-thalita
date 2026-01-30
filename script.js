const questions = [
  { question: "1- Por qual motivo você está fazendo o teste DISC?", options: ["Participando de um processo de seleção.", "Aumentar seu autoconhecimento.", "Pedido da empresa em que trabalha.", "Apenas curiosidade."] },
  { question: "2- Selecione o adjetivo que melhor descreve você!", options: ["Persistente", "Persuasivo", "Brincalhão", "Sereno"] },
  { question: "3- Selecione o adjetivo que melhor descreve você!", options: ["Sociável", "Energético", "Controlado", "Atencioso"] },
  { question: "4- Selecione o adjetivo que melhor descreve você!", options: ["Competitivo", "Submisso", "Doador", "Convincente"] },
  { question: "5- Selecione o adjetivo que melhor descreve você!", options: ["Reservado", "Respeitoso", "Estimulante", "Habilidoso"] },
  { question: "6- Selecione o adjetivo que melhor descreve você!", options: ["Autossuficiente", "Espirituoso", "Satisfeito", "Sensível"] },
  { question: "7- Selecione o adjetivo que melhor descreve você!", options: ["Charmoso", "Paciente", "Planejador", "Positivo"] },
  { question: "8- Selecione o adjetivo que melhor descreve você!", options: ["Espontâneo", "Organizado", "Seguro", "Tímido"] },
  { question: "9- Selecione o adjetivo que melhor descreve você!", options: ["Franco", "Serviçal", "Ordeiro", "Otimista"] },
  { question: "10- Selecione o adjetivo que melhor descreve você!", options: ["Engraçado", "Amigável", "Vigoroso", "Fiel"] },
  { question: "11- Selecione o adjetivo que melhor descreve você!", options: ["Diplomático", "Minucioso", "Audacioso", "Encantador"] },
  { question: "12- Selecione o adjetivo que melhor descreve você!", options: ["Alegre", "Confiante", "Previsível", "Culto"] },
  { question: "13- Selecione o adjetivo que melhor descreve você!", options: ["Inofensivo", "Independente", "Idealista", "Inspirado"] },
  { question: "14- Selecione o adjetivo que melhor descreve você!", options: ["Profundo", "Decidido", "Irônico", "Demonstrativo"] },
  { question: "15- Selecione o adjetivo que melhor descreve você!", options: ["Mediador", "Desembaraçado", "Ativo", "Musical"] },
  { question: "16- Selecione o adjetivo que melhor descreve você!", options: ["Firme", "Pensativo", "Conversador", "Tolerante"] },
  { question: "17- Selecione o adjetivo que melhor descreve você!", options: ["Líder", "Ativo", "Leal", "Ouvinte"] },
  { question: "18- Selecione o adjetivo que melhor descreve você!", options: ["Atraente", "Detalhista", "Chefe", "Contente"] },
  { question: "19- Selecione o adjetivo que melhor descreve você!", options: ["Agradável", "Produtivo", "Perfeccionista", "Popular"] },
  { question: "20- Selecione o adjetivo que melhor descreve você!", options: ["Vivaz", "Valente", "Comportado", "Equilibrado"] },
  { question: "21- Selecione o adjetivo que melhor descreve você!", options: ["Tranquilo", "Autoritário", "Metido", "Acanhado"] },
  { question: "22- Selecione o adjetivo que melhor descreve você!", options: ["Desinteressado", "Insensível", "Indisciplinado", "Rancoroso"] },
  { question: "23- Selecione o adjetivo que melhor descreve você!", options: ["Ressentido", "Repetitivo", "Inflexível", "Relutante"] },
  { question: "24- Selecione o adjetivo que melhor descreve você!", options: ["Esquecido", "Complicado", "Mandão", "Medroso"] },
  { question: "25- Selecione o adjetivo que melhor descreve você!", options: ["Inoportuno", "Inseguro", "Indeciso", "Impaciente"] },
  { question: "26- Selecione o adjetivo que melhor descreve você!", options: ["Frio", "Desligado", "Imprevisível", "Impopular"] },
  { question: "27- Selecione o adjetivo que melhor descreve você!", options: ["Insatisfeito", "Cabeça Dura", "Casual", "Hesitante"] },
  { question: "28- Selecione o adjetivo que melhor descreve você!", options: ["Simples", "Permissivo", "Orgulhoso", "Cauteloso"] },
  { question: "29- Selecione o adjetivo que melhor descreve você!", options: ["Discutidor", "Incerto", "Esquentado", "Alienado"] },
  { question: "30- Selecione o adjetivo que melhor descreve você!", options: ["Ingênuo", "Negativo", "Ousado", "Indiferente"] },
  { question: "31- Selecione o adjetivo que melhor descreve você!", options: ["Trabalhador", "Preocupado", "Retraído", "Egoísta"] },
  { question: "32- Selecione o adjetivo que melhor descreve você!", options: ["Indelicado", "Tagarela", "Receoso", "Receptivo"] },
  { question: "33- Selecione o adjetivo que melhor descreve você!", options: ["Mandão", "Confuso", "Desorganizado", "Deprimido"] },
  { question: "34- Selecione o adjetivo que melhor descreve você!", options: ["Intolerante", "Inconstante", "Introvertido", "Apático"] },
  { question: "35- Selecione o adjetivo que melhor descreve você!", options: ["Manipulador", "Desordenado", "Triste", "Resmungão"] },
  { question: "36- Selecione o adjetivo que melhor descreve você!", options: ["Cético", "Lento", "Convencido", "Obstinado"] },
  { question: "37- Selecione o adjetivo que melhor descreve você!", options: ["Solitário", "Barulhento", "Tirânico", "Preguiçoso"] },
  { question: "38- Selecione o adjetivo que melhor descreve você!", options: ["Distraído", "Vagaroso", "Desconfiado", "Irritável"] },
  { question: "39- Selecione o adjetivo que melhor descreve você!", options: ["Imprudente", "Agitado", "Relutante", "Vingativo"] },
  { question: "40- Selecione o adjetivo que melhor descreve você!", options: ["Instável", "Astuto", "Crítico", "Acomodado"] },
  { question: "41- Selecione o adjetivo que melhor descreve você!", options: ["Animado", "Adaptável", "Aventureiro", "Analítico"] }
];

const profiles = ['D', 'I', 'S', 'C'];

const descriptions = {
  D: "Dominância: assertivo, focado em resultados.",
  I: "Influência: comunicativo e persuasivo.",
  S: "Estabilidade: paciente e confiável.",
  C: "Conformidade: analítico e detalhista."
};

let currentQuestion = 0;
let scores = {
  D: 0,
  I: 0,
  E: 0,
  C: 0
};


document.getElementById('start-btn').addEventListener('click', function () {
  // esconde a tela inicial
  document.getElementById('intro-screen').style.display = 'none';

  // mostra o quiz
  document.getElementById('quiz').style.display = 'block';

  // mostra a dica fixa acima da questão
  document.getElementById('fixed-hint').style.display = 'block';

  // chama a primeira pergunta
  showQuestion();
});



function showQuestion() {
  if (currentQuestion >= questions.length) {
    showResults();
    return;
  }

  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.innerText = opt;

    btn.addEventListener("click", () => {

      // NÃO pontua a primeira pergunta (motivo do teste)
      if (currentQuestion !== 0) {
        switch (idx) {
          case 0:
            scores.D++;
            break;
          case 1:
            scores.I++;
            break;
          case 2:
            scores.E++;
            break;
          case 3:
            scores.C++;
            break;
        }
      }

      currentQuestion++;
      showQuestion();
    });

    optionsDiv.appendChild(btn);
  });
}




function showResults() {
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('results').style.display = 'block';

  const tbody = 
  document.getElementById("score-d").innerText = scores.D;
  document.getElementById("score-i").innerText = scores.I;
  document.getElementById("score-e").innerText = scores.E;
  document.getElementById("score-c").innerText = scores.C;

  ['D', 'I', 'S', 'C'].forEach(profile => {
    tbody.innerHTML += `
      <tr>
        <td><strong>${profile}</strong></td>
        <td>${scores[profile]}</td>
        <td>${descriptions[profile]}</td>
      </tr>
    `;
  });

  // 🔴 AQUI é o ponto-chave
  document.getElementById('pdf-btn').onclick = gerarPDF;
}


 function gerarPDF() {
  window.print();
}
