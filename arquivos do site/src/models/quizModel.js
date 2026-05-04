var database = require("../database/config")

function salvarResultado(acertos, erros, pontuacao) {
    console.log("ACESSEI O QUIZ MODEL");

    var instrucaoSql = `
        INSERT INTO resultados_quiz (acertos, erros, pontuacao)
        VALUES (${acertos}, ${erros}, ${pontuacao});
    `;

    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarResultado
};