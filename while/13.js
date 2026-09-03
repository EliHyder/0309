const readline = require("readline-sync")

let opcao;
    do {
        console.log("1 - Olá");
        console.log("2 - Tchau");
        console.log("3 - Sair");
        opcao = parseInt(readline.question("Escolha uma opção: "));
        if (opcao === 1) console.log("Olá!");
        else if (opcao === 2) console.log("Tchau!");
    } while (opcao !== 3);