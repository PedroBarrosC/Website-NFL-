var database = require("../database/config")

function salvarResultado(acertos, erros, pontuacao, idUsuario) {
    var instrucaoSql = `
        INSERT INTO resultados_quiz (acertos, erros, pontuacao, fk_usuario)
        VALUES (${acertos}, ${erros}, ${pontuacao}, ${idUsuario});
    `;
    return database.executar(instrucaoSql);
}

function dadosQuiz() {
    var instrucaoSql = `
       SELECT pontuacao, COUNT(*) AS quantidade
FROM resultados_quiz
GROUP BY pontuacao
ORDER BY pontuacao;
    `;
    return database.executar(instrucaoSql);
}

function dadosTimes() {
    var instrucaoSql = `
SELECT t.nome_time, COUNT(*) AS quantidade
FROM usuario u
JOIN times t ON u.time_favorito = t.id_time
GROUP BY t.nome_time;
        
    `;
    return database.executar(instrucaoSql);
}


module.exports = {
    salvarResultado,
    dadosQuiz,
    dadosTimes
};