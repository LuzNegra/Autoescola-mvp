//var requestURL = 'http://127.0.0.1:5500/Json/inflacao.json';
var requestURL = 'https://luznegra.github.io/Autoescola-mvp//Json/inflacao.json';
var request = new XMLHttpRequest();
var questao;
request.open('GET', requestURL);
request.responseType = 'json';
request.send()
request.onload = function() {
    questao = request.response;
}

const minhasRepostas = JSON.parse(window.sessionStorage.getItem("repostas"));
const maxPerguntas = window.sessionStorage.getItem("maxQuestion");
const repostaedit = document.getElementById("repostaEdit");
let repostacerta = 0;
function verificarRepostas() {
    var myHtml = "<h1 class=\"Text_Materia\" id=\"acertos\"></h1>";
    for(x = 0; x < maxPerguntas; x++){
        myHtml += "<p class=\"text_center\" id=\"pergunta\">" + (x + 1) +") " + questao[x]["pergunta"] + "</p>";
        myHtml += "<div class=\"respotaCouteiner\"><ul>";
        myHtml += "<li>A) " + questao[x]["alternativa"]["a"] + "</li>";
        myHtml += "<li>B) " + questao[x]["alternativa"]["b"] + "</li>";
        myHtml += "<li>C) " + questao[x]["alternativa"]["c"] + "</li>";
        myHtml += "<li>D) " + questao[x]["alternativa"]["d"] + "</li></ul>";
        myHtml += "</div>"
        if (minhasRepostas[x] == questao[x]["correta"]){
            myHtml += "<p class=\"text_justify\" id=\"correcao\">Você acertou</p>";
            repostacerta++;
        }else{
            myHtml += "<p class=\"text_justify\" id=\"correcao\">Você errou</p>";
        }
        myHtml += "<p class=\"text_justify\" id=\"correto\">A opção correta é a letra " + questao[x]["correta"].toUpperCase() + "</p>";
    }
    repostaedit.innerHTML = myHtml;
    const acertos = document.getElementById("acertos");
    acertos.innerHTML = repostacerta + "/" + maxPerguntas;
}