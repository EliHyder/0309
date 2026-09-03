const readline = require("readline-sync")
let soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(readline.question("Digite um número: "));
    }
    console.log("Soma: " + soma);