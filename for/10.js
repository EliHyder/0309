const readline = require("readline-sync")
const palavra = readline.question("Digite uma palavra: ");
    for (let i = 0; i < palavra.length; i++) {
        console.log(palavra.charAt(i));
    }