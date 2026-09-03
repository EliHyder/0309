const readline = require("readline-sync")
let positivos = 0;
    for (let num; ; ) {
        num = parseInt(readline.question("Digite um número (-1 para sair): "));
        if (num > 0) positivos++;
        if (num === -1) break;
    }
    console.log("Total de números positivos: " + positivos);