const readline = require("readline-sync")

for (let opcao; ; ) {
        console.log("1 - Olá");
        console.log("2 - Tchau");
        console.log("3 - Sair");
        opcao = parseInt(readline.question("Escolha uma opção: "));
        if (opcao === 1) console.log("Olá!");
        else if (opcao === 2) console.log("Tchau!");
        if (opcao === 3) break;
    }