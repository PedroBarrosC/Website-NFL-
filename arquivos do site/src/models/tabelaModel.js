var database = require("../database/config")

function listar() {
    console.log("acessei o model para fazer a tabela");
    var instrucaoSql = `
        SELECT u.nome, t.nome_time from usuario u join times t on u.time_favorito = t.id_time;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar
};