const readline = require("readline-sync")
let num = parseInt(readline.question("Digite um número para calcular o fatorial: "));
    let fatorial = 1;
    for (; num > 1; num--) {
        fatorial *= num;
    }
    console.log("Fatorial: " + fatorial);