const readline = require("readline-sync")
let idade;
    for (; ; ) {
        idade = parseInt(readline.question("Digite sua idade (0-120): "));
        if (idade >= 0 && idade <= 120) break;
    }
    console.log("Idade válida: " + idade);