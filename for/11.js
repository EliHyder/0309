const readline = require("readline-sync")
let soma = 0, num;
    for (; soma <= 100; soma += num) {
        num = parseInt(readline.question("Digite um número: "));
    }
    console.log("Soma final: " + soma);