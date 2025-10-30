// adicionar quantidade ao lado dos alimentos
// atualizar html - interface bonita e mais eficiente e adicionar title "alimentos"
let refeicao = document.getElementById("refeicao");
let calorias = document.getElementById("calorias");
let quantCal = 0;
let lista = []

function adicionarRef(){
    let quantidade = document.getElementById("quantidade").value;
    if(quantidade <= 0){
        alert("ERRO - quantidade invalida");
    } else {
    let opcaoEscolhida = document.getElementById("opcao");
    let selectedOption = opcaoEscolhida.options[opcaoEscolhida.selectedIndex];
    let label = selectedOption.text; 
    let calculoCals = quantidade * opcaoEscolhida.value;
    quantCal = quantCal + calculoCals;
    if (lista.includes(label)){
        alert(`Comida ja adicionada, clique "nova refeição" se cometeu um erro`)
    } else{
    lista.push(label);
    let comida = label + `(${parseInt(quantidade)}g)`;
    refeicao.textContent = refeicao.textContent + " " + comida;
    calorias.textContent = `calorias: ${parseInt(quantCal)}`;
}
}
}

function reiniciar(){
    document.getElementById("refeicao").textContent = " "
    document.getElementById("calorias").textContent = " "
    lista = []
}

