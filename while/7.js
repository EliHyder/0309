const readline = require("readline-sync")

let idade;
    do {
        idade = parseInt(readline.question("Digite sua idade (0-120): "));
    } while (idade < 0 || idade > 120);
    console.log("Idade válida: " + idade);