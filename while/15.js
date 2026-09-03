const readline = require("readline-sync")

let num = parseInt(readline.question("Digite um número para calcular o fatorial: "));
    let fatorial = 1;
    while (num > 1) {
        fatorial *= num;
        num--;
    }
    console.log("Fatorial: " + fatorial);