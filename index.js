var requestURL = 'http://127.0.0.1:5500/Json/inflacao.json';
var request = new XMLHttpRequest();
var questao;
request.open('GET', requestURL);
request.responseType = 'json';
request.send()
request.onload = function() {
    questao = request.response;
}

function test (){
    console.log(questao[1]["pergunta"])
}