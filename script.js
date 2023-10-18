const sufixos = [
    {
        sufixo: "less",
        opcoes: ["indica 'cheio de'", "menciona a ausência", "forma adjetivos a partir de verbos"],
        respostaCorreta: {
            resposta: "menciona a ausência",
            exemplos: ["careless - descuidado", "doubtless - sem dúvida", "endless - sem fim"]
        }
    },
    {
        sufixo: "ful",
        opcoes: ["indica 'cheio de'", "sob/sub", "não"],
        respostaCorreta: {
            resposta: "indica 'cheio de'",
            exemplos: ["careful - cuidadoso", "doubtful - duvidoso", "helpful - prestativo"]
        }
    },    
    {
        sufixo: "able, ible",
        opcoes: ["inferior, abaixo de", "forma adjetivos a partir de verbos", "superior, acima de"],
        respostaCorreta: {
            resposta: "forma adjetivos a partir de verbos",
            exemplos: ["acceptable – aceitável", "adorable – adorável", "affordable – de preço acessível"]
        }
    },
    {
        sufixo: "under",
        opcoes: ["inferior, abaixo de", "sob/sub", "de novo, mais uma vez"],
        respostaCorreta: {
            resposta: "sob/sub",
            exemplos: ["undersea – submarino", "underestimate – subestimar", "underage – menor de idade"]
        }
    },
    {
        sufixo: "un",
        opcoes: ["não", "de novo, mais uma vez", "superior, acima de"],
        respostaCorreta: {
            resposta: "não",
            exemplos: ["unconditional – incondicional", "undo – desfazer", "unattractive – não-atraente"]
        }
    },
    {
        sufixo: "over",
        opcoes: ["não", "inferior, abaixo de", "superior, acima de"],
        respostaCorreta: {
            resposta: "superior, acima de",
            exemplos: ["overexcited – muito excitado", "overcharge – sobrecarga", "overdo – exagerar"]
        }
    },
    {
        sufixo: "sub",
        opcoes: ["antes de", "de novo, mais uma vez", "inferior, abaixo de"],
        respostaCorreta: {
            resposta: "inferior, abaixo de",
            exemplos: ["submarine – submarino", "subterranean - subterráneo", "subconscious – subconsciente"]
        }
    },
    {
        sufixo: "re",
        opcoes: ["de novo, mais uma vez", "não", "de forma incorreta"],
        respostaCorreta: {
            resposta: "de novo, mais uma vez",
            exemplos: ["repaint – repintar", "redo – refazer", "refresh – refrescar"]
        }
    },
    {
        sufixo: "non",
        opcoes: ["não", "antes de", "não, contrário"],
        respostaCorreta: {
            resposta: "não",
            exemplos: ["nonexistent – não-existente", "nonstop – sem parar", "nonallergic – não-alérgico"]
        }
    },
    {
        sufixo: "mis",
        opcoes: ["meio", "de forma incorreta", "contra"],
        respostaCorreta: {
            resposta: "de forma incorreta",
            exemplos: ["misplace – mal-colocado", "misbehaved – mal-comportado", "misunderstand - mal-entendimento"]
        }
    },
    {
        sufixo: "mid",
        opcoes: ["meio", "não", "antes de"],
        respostaCorreta: {
            resposta: "meio",
            exemplos: ["midi skirts – mini saia", "midnight – meia-noite", "midfield – meio-de-campo"]
        }
    },
    {
        sufixo: "in, im, ir",
        opcoes: ["antes de", "fora, pra fora, passado", "não"],
        respostaCorreta: {
            resposta: "não",
            exemplos: ["incorrect – incorreto", "impossible – impossível", "irregular – irregular"]
        }
    },
    {
        sufixo: "fore",
        opcoes: ["antes de", "não, contrário", "oposto de"],
        respostaCorreta: {
            resposta: "antes de",
            exemplos: ["forebear – ancestral", "forecast – previsão", "forehead – testa"]
        }
    },
    {
        sufixo: "ex",
        opcoes: ["oposto de", "fora, pra fora, passado", "ideia de duplicação"],
        respostaCorreta: {
            resposta: "fora, pra fora, passado",
            exemplos: ["exhale – exhalar", "exclude – excluir", "ex-wife – ex-esposa"]
        }
    },
    {
        sufixo: "dis",
        opcoes: ["contra", "não, contrário", "oposto de"],
        respostaCorreta: {
            resposta: "não, contrário",
            exemplos: ["disappear – desaparecer", "disable – desativar", "disagree – descordar"]
        }
    },
    {
        sufixo: "de",
        opcoes: ["oposto de", "ideia de duplicação", "antes de"],
        respostaCorreta: {
            resposta: "oposto de",
            exemplos: ["deactivated – desativado", "decaffeinated – descafeinado", "detach – separar"]
        }
    },
    {
        sufixo: "bi",
        opcoes: ["contra", "ideia de duplicação", "de forma incorreta"],
        respostaCorreta: {
            resposta: "ideia de duplicação",
            exemplos: ["bicolour – bicolour", "bifunctional – bifuncional", "bifocal – bifocal"]
        }
    },
    {
        sufixo: "anti",
        opcoes: ["contra", "de novo, mais uma vez", "superior, acima de"],
        respostaCorreta: {
            resposta: "contra",
            exemplos: ["antiseptic – antisético", "antipathy – antipatia", "antidote – antídoto"]
        }
    },
];

const sufixoElement = document.getElementById("suffix");
const opcoesButtons = document.querySelectorAll("#options button");
const resultadoDiv = document.getElementById("result");
const proximoBotao = document.getElementById("proximo");

let indiceSufixo = 0;

function exibirSufixo() {
    const sufixo = sufixos[indiceSufixo];
    let textoSufixo = `Sufixo: ${sufixo.sufixo}`;

    if (sufixo.sufixo === "able, ible" || sufixo.sufixo === "ful" || sufixo.sufixo === "less") {
        textoSufixo = `Prefixo: ${sufixo.sufixo}`;
    }

    sufixoElement.textContent = textoSufixo;
    
    opcoesButtons.forEach((botao, index) => {
        botao.textContent = sufixo.opcoes[index];
    });
}

function proximoSufixo() {
    resultadoDiv.textContent = "";

    if (indiceSufixo < sufixos.length - 1) {
        indiceSufixo++;
        exibirSufixo();
    } 
    else {
        indiceSufixo = 0;
        exibirSufixo();
    }
}

function verificarResposta(resposta) {
    const sufixo = sufixos[indiceSufixo];
    const respostaCorreta = sufixo.respostaCorreta.resposta;
    const exemplos = sufixo.respostaCorreta.exemplos;

    if (resposta === respostaCorreta) {
        resultadoDiv.innerHTML = "Resposta correta! 🎉";
        if (exemplos && exemplos.length > 0) {
            resultadoDiv.innerHTML += "<br><br>Exemplos:<br>" + exemplos.join('<br>');
        }
    } 
    else {
        resultadoDiv.innerHTML = "Resposta incorreta. 😞<br>A resposta correta seria: " + respostaCorreta + "<br><br>";
        if (exemplos && exemplos.length > 0) {
            resultadoDiv.innerHTML += "Exemplos:<br>" + exemplos.join('<br>');
        }
    }
}

opcoesButtons.forEach((botao, index) => {
    botao.addEventListener("click", function() {
        const respostaSelecionada = sufixos[indiceSufixo].opcoes[index];
        verificarResposta(respostaSelecionada);
    });
});

exibirSufixo();

proximoBotao.addEventListener("click", function() {
    proximoSufixo();
});