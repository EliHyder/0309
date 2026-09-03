const readline = require("readline-sync")
const secreto = 7;
    for (let palpite; ; ) {
        palpite = parseInt(readline.question("Adivinhe o número (entre 1 e 10): "));
        if (palpite === secreto) break;
    }
    console.log("Você acertou!");