const readline = require("readline-sync")
let soma = 0;
    for (let num; ; ) {
        num = parseInt(readline.question("Digite um número (0 para sair): "));
        soma += num;
        if (num === 0) break;
    }
    console.log("Soma total: " + soma);