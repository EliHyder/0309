const readline = require("readline-sync")

let senha = "";
    while (senha !== "1234") {
        senha = readline.question("Digite a senha: ");
    }
    console.log("Senha correta!");