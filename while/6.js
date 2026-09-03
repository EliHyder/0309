const readline = require("readline-sync")

const secreto = 7;
    let palpite;
    do {
        palpite = parseInt(readline.question("Adivinhe o número (entre 1 e 10): "));
    } while (palpite !== secreto);
    console.log("Você acertou!");