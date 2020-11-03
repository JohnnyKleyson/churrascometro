/*Carne - 400gr por pessoa + de 6horas - 650gr
Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml
Linguiça = 200gr por pessoa + de 6 horas = 400gr
Pao de alho = 200gr por pessoa + de 6 horas = 350gr
Crianças valem por 0,5. */


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePorPessoa(duracao) * adultos +  (carnePorPessoa(duracao) / 2 * criancas)
    let qdtTotalCerveja = cervejaPorPessoa(duracao) * adultos
    let qdtTotalBebidas = bebidasPorPessoa(duracao) * adultos +  (bebidasPorPessoa(duracao) / 2 * criancas)
    let qdtTotalAlho = alhoPorPessoa(duracao) * adultos +  (alhoPorPessoa(duracao) / 2 * criancas)
    let qdtTotalLinguica = linguicaPorPessoa(duracao) * adultos +  (linguicaPorPessoa(duracao) / 2 * criancas)


    resultado.innerHTML = `<p>${qdtTotalCarne/1000} kg de Carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalAlho / 100)} kg de Pão de Alho </p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalLinguica / 1000)} kg de Linguiça </p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latinhas de Cerveja </p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de 2L de Bebidas </p>`
}

function carnePorPessoa(duracao){
    if(duracao >= 6){
        return 650;
    }else {
        return 400;
    }

}
function cervejaPorPessoa(duracao){
    if(duracao >= 6){
        return 2000;
    }else {
        return 1200;
    }

}
function bebidasPorPessoa(duracao){
    if(duracao >= 6){
        return 1500;
    }else {
        return 1000;
    }

}
function alhoPorPessoa(duracao){
    if(duracao >= 6){
        return 350;
    }else {
        return 200;
    }

}
function linguicaPorPessoa(duracao){
    if(duracao >= 6){
        return 400;
    }else {
        return 200;
    }

}