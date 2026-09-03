const readline = require("readline-sync")
let num = parseInt(readline.question("Digite um número: "));
    for (; num >= 0; num--) {
        console.log(num);
    }