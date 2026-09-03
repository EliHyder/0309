const readline = require("readline-sync")

let num = parseInt(readline.question("Digite um número: "));
    while (num >= 0) {
        console.log(num);
        num--;
    }