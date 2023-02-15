var maxPerguntas;
//var requestURL = 'http://127.0.0.1:5500/Json/quest.json';
var requestURL = 'https://luznegra.github.io/Autoescola-mvp//Json/quest.json';
var request = new XMLHttpRequest();
var questao;
request.open('GET', requestURL);
request.responseType = 'json';
request.send()
request.onload = function() {
    questao = request.response;
    maxPerguntas = Object.keys(questao).length
    mudarPergunta();
}

var questNumber = 0;
var minhasRepostas = [maxPerguntas]
const materia =document.getElementById("materia");
const questPergunta = document.getElementById("text_pergunta");
const reposta_a = document.getElementById("label_a");
const reposta_b = document.getElementById("label_b");
const reposta_c = document.getElementById("label_c");
const reposta_d = document.getElementById("label_d");
function mudarPergunta(){
    materia.innerHTML = questao[questNumber]["materia"];
    questPergunta.innerHTML = questNumber + 1 +") " + questao[questNumber]["pergunta"];
    if(questao[questNumber]["imagem"] != undefined){
        questPergunta.innerHTML += " <img src=" + questao[questNumber]["imagem"] + "\ alt="+ JSON.stringify(questao[questNumber]["imgDescricao"]) + " class=\"myimg\" id=\"myimg\">"
    }
    reposta_a.innerHTML = "A) " + questao[questNumber]["alternativa"]["a"];
    reposta_b.innerHTML = "B) " + questao[questNumber]["alternativa"]["b"];
    reposta_c.innerHTML = "C) " + questao[questNumber]["alternativa"]["c"];
    reposta_d.innerHTML = "D) " + questao[questNumber]["alternativa"]["d"];
}

function back(){
    if(questNumber > 0){
        questNumber--;
        mudarPergunta();
        marcaCheck();
    }
}
function next(){
    if(questNumber < maxPerguntas -1){
        minhasRepostas[questNumber] = document.querySelector('input[name="reposta"]:checked').value;
        tirarCheck();
        questNumber++
        mudarPergunta();
    }else{
        minhasRepostas[questNumber] = document.querySelector('input[name="reposta"]:checked').value;
        window.sessionStorage.setItem("maxQuestion", maxPerguntas);
        window.sessionStorage.setItem("repostas", JSON.stringify(minhasRepostas));
        window.location.href = "./repostas.html";
    }
}

const radios = document.getElementsByTagName('input');
function tirarCheck(){
    for(x = 0; x < radios.length; x++){
        radios[x].checked = false;
    }
}
function marcaCheck(){
    for(x = 0; x < radios.length; x++){
        if(radios[x].value == minhasRepostas[questNumber]){
            radios[x].checked = true;
        }
    }
}
function test (){
    console.log(questao[1]["pergunta"])
    console.log(questao[1]["alternativa"]["a"])
}
