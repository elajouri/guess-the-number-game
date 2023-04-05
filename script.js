function sorteia() {

    return Math.round(Math.random() * 10);
}

function sorteiaNumeros(quantidade) {

    let segredos = [];
    let contador = 1;

    while (contador <= quantidade) {
        let numeroaleatorio = sorteia();
        let mesmonumero = false;

        for (let posicao = 0; posicao < segredos.length; posicao++) {
            if (segredos[posicao] == numeroaleatorio) {
                mesmonumero = true;
                break;
            }
        }
        if (mesmonumero == false) {
            segredos.push(numeroaleatorio);
            contador++;
        }
    }
    return segredos
}

let segredos = sorteiaNumeros(2); 
console.log(segredos)
let input = document.querySelector("input");
input.focus();

function verifica() {

    let achou = false;

    for (let posicao = 0; posicao < segredos.length; posicao++) {
        if (input.value == segredos[posicao]) {

            alert("voce acertou!");
            achou = true;
            break;
        }
    }
    if (achou == false) {

        alert("voce errou");
    }

    input.value = "";
    input.focus();
}

let button = document.querySelector("button");

button.onclick = verifica;