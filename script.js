const questions = [
  { question: "Por qual motivo você está fazendo o teste DISC?", options: ["Participando de um processo de seleção.", "Aumentar seu autoconhecimento.", "Pedido da empresa em que trabalha.", "Apenas curiosidade."] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Persistente", "Persuasivo", "Brincalhão", "Sereno"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Sociável", "Energético", "Controlado", "Atencioso"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Competitivo", "Submisso", "Doador", "Convincente"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Reservado", "Respeitoso", "Estimulante", "Habilidoso"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Autossuficiente", "Espirituoso", "Satisfeito", "Sensível"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Charmoso", "Paciente", "Planejador", "Positivo"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Espontâneo", "Organizado", "Seguro", "Tímido"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Franco", "Serviçal", "Ordeiro", "Otimista"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Engraçado", "Amigável", "Vigoroso", "Fiel"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Diplomático", "Minucioso", "Audacioso", "Encantador"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Alegre", "Confiante", "Previsível", "Culto"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Inofensivo", "Independente", "Idealista", "Inspirado"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Profundo", "Decidido", "Irônico", "Demonstrativo"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Mediador", "Desembaraçado", "Ativo", "Musical"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Firme", "Pensativo", "Conversador", "Tolerante"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Líder", "Ativo", "Leal", "Ouvinte"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Atraente", "Detalhista", "Chefe", "Contente"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Agradável", "Produtivo", "Perfeccionista", "Popular"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Vivaz", "Valente", "Comportado", "Equilibrado"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Tranquilo", "Autoritário", "Metido", "Acanhado"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Desinteressado", "Insensível", "Indisciplinado", "Rancoroso"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Ressentido", "Repetitivo", "Inflexível", "Relutante"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Esquecido", "Complicado", "Mandão", "Medroso"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Inoportuno", "Inseguro", "Indeciso", "Impaciente"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Frio", "Desligado", "Imprevisível", "Impopular"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Insatisfeito", "Cabeça Dura", "Casual", "Hesitante"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Simples", "Permissivo", "Orgulhoso", "Cauteloso"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Discutidor", "Incerto", "Esquentado", "Alienado"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Ingênuo", "Negativo", "Ousado", "Indiferente"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Trabalhador", "Preocupado", "Retraído", "Egoísta"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Indelicado", "Tagarela", "Receoso", "Receptivo"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Mandão", "Confuso", "Desorganizado", "Deprimido"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Intolerante", "Inconstante", "Introvertido", "Apático"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Manipulador", "Desordenado", "Triste", "Resmungão"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Cético", "Lento", "Convencido", "Obstinado"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Solitário", "Barulhento", "Tirânico", "Preguiçoso"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Distraído", "Vagaroso", "Desconfiado", "Irritável"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Imprudente", "Agitado", "Relutante", "Vingativo"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Instável", "Astuto", "Crítico", "Acomodado"] },
  { question: "Selecione o adjetivo que melhor descreve você!", options: ["Animado", "Adaptável", "Aventureiro", "Analítico"] }
];

const profiles = ['D','I','S','C'];

const descriptions = {
  D: "Dominância: assertivo, focado em resultados.",
  I: "Influência: comunicativo e persuasivo.",
  S: "Estabilidade: paciente e confiável.",
  C: "Conformidade: analítico e detalhista."
};

let currentQuestion = 0;
let scores = { D:0, I:0, S:0, C:0 };

document.getElementById("start-btn").onclick = () => {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  showQuestion();
};

function showQuestion() {
  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    const options = document.getElementById("options");
    options.innerHTML = "";

    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.innerText = opt;
      btn.onclick = () => {
        if (currentQuestion > 0) scores[profiles[idx]]++;
        currentQuestion++;
        showQuestion();
      };
      options.appendChild(btn);
    });
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("results").style.display = "block";
  const tbody = document.getElementById("result-body");
  tbody.innerHTML = "";

  profiles.forEach(p => {
    tbody.innerHTML += `
      <tr>
        <td><strong>${p}</strong></td>
        <td>${scores[p]}</td>
        <td>${descriptions[p]}</td>
      </tr>
    `;
  });
}

function generatePDF() {
  window.print();
}
