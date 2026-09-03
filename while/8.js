const readline = require("readline-sync")

let i = 0, soma = 0;
    while (i < 10) {
        soma += parseInt(readline.question("Digite um número: "));
        i++;
    }
    console.log("Soma: " + soma);