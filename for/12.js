const readline = require("readline-sync")

let soma = 0, num;
    for (; soma <= 100; ) {
        num = parseInt(readline.question("Digite um número: "));
        soma += num;
    }
    console.log("Soma final: " + soma);