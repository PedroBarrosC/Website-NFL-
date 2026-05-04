var quizModel = require("../models/quizModel");

function salvar(req, res) {
    var acertos = req.body.acertos;
    var erros = req.body.erros;
    var pontuacao = req.body.pontuacao;

    if (acertos == undefined || erros == undefined || pontuacao == undefined) {
        res.status(400).send("Dados incompletos!");
    } else {
        quizModel.salvarResultado(acertos, erros, pontuacao)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    salvar
};