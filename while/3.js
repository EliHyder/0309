const readline = require("readline-sync")

let num, soma = 0;
    do {
        num = parseInt(readline.question("Digite um número (0 para sair): "));
        soma += num;
    } while (num !== 0);
    console.log("Soma total: " + soma);