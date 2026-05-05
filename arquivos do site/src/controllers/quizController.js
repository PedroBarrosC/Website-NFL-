var quizModel = require("../models/quizModel");

function salvar(req, res) {
    var acertos = req.body.acertos;
    var erros = req.body.erros;
    var pontuacao = req.body.pontuacao;
    var idUsuario = req.body.idUsuario;

    console.log("SALVANDO:", acertos, erros, pontuacao, idUsuario);

    quizModel.salvarResultado(acertos, erros, pontuacao, idUsuario)
        .then(() => res.json({ ok: true }))
        .catch(err => {
            console.error("ERRO AO SALVAR:", err);
            res.status(500).json(err);
        });
}
function buscarDadosQuiz(req, res) {
    quizModel.dadosQuiz()
        .then(resultado => res.json(resultado))
        .catch(err => res.status(500).json(err));
}

function buscarDadosTimes(req, res) {
    quizModel.dadosTimes()
        .then(resultado => res.json(resultado))
        .catch(err => res.status(500).json(err));
}
function buscarDistribuicao(req, res) {
    quizModel.dadosQuiz()
        .then(resultado => res.json(resultado))
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        });
}
module.exports = {
    salvar,
    buscarDadosQuiz,
    buscarDadosTimes,
    buscarDistribuicao
};