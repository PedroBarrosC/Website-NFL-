var kpisModel = require("../models/kpisModel");

function obterKpis(req, res) {

    kpisModel.obterKpis()
        .then(function(resultado) {

            res.json({
                time_mais_escolhido: resultado[0][0].nome_time,
                pontuacao_mais_tirada: resultado[1][0].pontuacao,
                ultima_pontuacao: resultado[2][0].pontuacao
            });

        }).catch(function(erro) {

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });
}

module.exports = {
    obterKpis
};