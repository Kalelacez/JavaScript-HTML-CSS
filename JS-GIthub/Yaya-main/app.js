let titulo = document.querySelector("h1");

titulo.innerHTML = "Desafio para Yaya";

function verificarbotao() {
    alert("Yaya clicou o botão parabéns!");
}

function verificaralerta() {
    prompt("Você é o amor da vida de quem criou esse joguinho, você sabe quem é? Escreva embaixo");
    alert("ACERTOUUUU PARABENSSS!")
}

function verificarprompt() {
    let cidade = prompt("Fale um nome de uma cidade no Brasil");
    alert (`Estive em ${cidade} e pensei em você bebe, hehehe`);
}

function verificarsoma() {
    alert ("ESCOLHA DOIS NUMEROS PRA EU SOMAR AGORA MEU AMOR");
    let numero1 = parseInt(prompt("Coloque o numero 1 aqui princesa"));
    let numero2 = parseInt(prompt("E o segundo numero aqui"));
    let resultado = numero1 + numero2
    alert ("O resultado da soma dos dois números que você escolheu esta aqui :)");
    alert ("16");
    alert ("Brincadeira, esse é o seu número favorito, você sabe o porquê sei disso? Porque eu te amo muito!")
    alert (`o resultado verdadeiro é ${resultado}`)
}

