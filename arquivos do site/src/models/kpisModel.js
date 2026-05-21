var database = require("../database/config");

function obterKpis() {
    let sqlTimeMaisEscolhido = `
        SELECT t.nome_time
        FROM usuario u
        JOIN times t ON u.time_favorito = t.id_time
        GROUP BY t.nome_time
        ORDER BY COUNT(*) DESC
        LIMIT 1
    `;

    let sqlPontuacaoMaisTirada = `
        SELECT pontuacao
        FROM resultados_quiz
        GROUP BY pontuacao
        ORDER BY COUNT(*) DESC
        LIMIT 1
    `;

    let sqlUltimaPontuacao = `
        SELECT pontuacao
        FROM resultados_quiz
        ORDER BY data_criacao DESC
        LIMIT 1
    `;

    return Promise.all([
        database.executar(sqlTimeMaisEscolhido),
        database.executar(sqlPontuacaoMaisTirada),
        database.executar(sqlUltimaPontuacao)
    ]);
}

module.exports = { obterKpis }; 