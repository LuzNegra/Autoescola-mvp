const maxPerguntas = 10;
var requestURL = 'http://127.0.0.1:5500/Json/inflacao.json';
var request = new XMLHttpRequest();
var questao;
request.open('GET', requestURL);
request.responseType = 'json';
request.send()
request.onload = function() {
    questao = request.response;
}

var questNumber = 0;
const questPergunta = document.getElementById("text_pergunta");
const reposta_a = document.getElementById("label_a");
const reposta_b = document.getElementById("label_b");
const reposta_c = document.getElementById("label_c");
const reposta_d = document.getElementById("label_d");
function mudarPergunta(){
    questPergunta.innerHTML = questNumber + 1 +") " + questao[questNumber]["pergunta"];
    reposta_a.innerHTML = "A) " + questao[questNumber]["alternativa"]["a"];
    reposta_b.innerHTML = "B) " + questao[questNumber]["alternativa"]["b"];
    reposta_c.innerHTML = "C) " + questao[questNumber]["alternativa"]["c"];
    reposta_d.innerHTML = "D) " + questao[questNumber]["alternativa"]["d"];
}

function back(){
    if(questNumber > 0){
        questNumber--;
        mudarPergunta();
    }
}
function next(){
    if(questNumber < maxPerguntas -1){
        questNumber++
        mudarPergunta();
    }
}
function test (){
    console.log(questao[1]["pergunta"])
    console.log(questao[1]["alternativa"]["a"])
}