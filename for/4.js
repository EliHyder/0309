const readline = require("readline-sync")
for (let senha = ""; senha !== "1234"; senha = readline.question("Digite a senha: ")) {
        // condição verificada a cada volta; a leitura acontece no "incremento" do for
    }
    console.log("Senha correta!");