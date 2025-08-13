const perguntas = [
    {
        pergunta: "Qual elemento é usado na bomba de plutônio?",
        opcoes: ["Urânio-235", "Plutônio-239", "Hidrogênio", "Tório"],
        resposta: "Plutônio-239"
    },
    {
        pergunta: "Qual foi a cidade alvo da bomba de plutônio na Segunda Guerra?",
        opcoes: ["Hiroshima", "Nagasaki", "Tóquio", "Kyoto"],
        resposta: "Nagasaki"
    },
    {
        pergunta: "Em que ano as bombas atômicas foram usadas pela primeira vez?",
        opcoes: ["1945", "1939", "1950", "1942"],
        resposta: "1945"
    },
    {
        pergunta: "Qual foi o nome da primeira bomba nuclear testada?",
        opcoes: ["Little Boy", "Trinity", "Fat Man", "Castle Bravo"],
        resposta: "Trinity"
    },
    {
        pergunta: "O que é liberado durante a explosão de uma bomba nuclear?",
        opcoes: ["Apenas calor", "Onda de choque, calor e radiação", "Som", "Som e luz"],
        resposta: "Onda de choque, calor e radiação"
    },
    {
        pergunta: "Qual era o nome da bomba lançada sobre Hiroshima?",
        opcoes: ["Fat Man", "Little Boy", "Trinity", "Bravo"],
        resposta: "Little Boy"
    },
    {
        pergunta: "A bomba de hidrogênio utiliza qual tipo de reação?",
        opcoes: ["Fissão nuclear", "Fusão nuclear", "Combustão química", "Explosão térmica"],
        resposta: "Fusão nuclear"
    },
    {
        pergunta: "Quem liderou o Projeto Manhattan?",
        opcoes: ["Albert Einstein", "Robert Oppenheimer", "Enrico Fermi", "Niels Bohr"],
        resposta: "Robert Oppenheimer"
    },
    {
        pergunta: "Qual país foi o primeiro a desenvolver armas nucleares?",
        opcoes: ["Alemanha", "Estados Unidos", "Rússia", "Japão"],
        resposta: "Estados Unidos"
    },
    {
        pergunta: "Qual destas consequências NÃO é causada pela radiação nuclear?",
        opcoes: ["Queimaduras graves", "Câncer", "Aumento da fertilidade", "Doenças genéticas"],
        resposta: "Aumento da fertilidade"
    }
];

let indice = 0;
let pontuacao = 0;

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const feedbackEl = document.getElementById("feedback");
const proximaBtn = document.getElementById("proxima");

function carregarPergunta() {
    const questao = perguntas[indice];
    perguntaEl.textContent = questao.pergunta;
    opcoesEl.innerHTML = "";
    feedbackEl.textContent = "";
    proximaBtn.style.display = "none";

    questao.opcoes.forEach(opcao => {
        const btn = document.createElement("button");
        btn.textContent = opcao;
        btn.onclick = () => verificarResposta(opcao, questao.resposta);
        opcoesEl.appendChild(btn);
    });
}

function verificarResposta(opcao, resposta) {
    if (opcao === resposta) {
        feedbackEl.textContent = "✅ Resposta correta!";
        feedbackEl.style.color = "lightgreen";
        pontuacao++;
    } else {
        feedbackEl.textContent = `❌ Resposta errada! A resposta certa é: ${resposta}`;
        feedbackEl.style.color = "red";
    }
    proximaBtn.style.display = "block";
}

proximaBtn.onclick = () => {
    indice++;
    if (indice < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
};

function mostrarResultado() {
    perguntaEl.textContent = "Fim do quiz!";
    opcoesEl.innerHTML = "";
    feedbackEl.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
    feedbackEl.style.color = "yellow";

    const btnRecomecar = document.createElement("button");
    btnRecomecar.textContent = "🔄 Recomeçar Quiz";
    btnRecomecar.classList.add("recomecar");
    btnRecomecar.onclick = reiniciarQuiz;
    opcoesEl.appendChild(btnRecomecar);

    proximaBtn.style.display = "none";
}

function reiniciarQuiz() {
    indice = 0;
    pontuacao = 0;
    carregarPergunta();
}

carregarPergunta();
