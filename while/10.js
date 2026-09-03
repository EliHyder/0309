const readline = require("readline-sync")

const palavra = readline.question("Digite uma palavra: ");
    let i = 0;
    while (i < palavra.length) {
        console.log(palavra.charAt(i));
        i++;
    }