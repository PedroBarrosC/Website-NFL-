var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/salvar", function (req, res) {
    quizController.salvar(req, res);
});

router.get("/quiz-dados", (req, res) => {
    quizController.buscarDadosQuiz(req, res);
});

router.get("/times-dados", (req, res) => {
    quizController.buscarDadosTimes(req, res);
});

router.get("/distribuicao", (req, res) => {
    quizController.buscarDistribuicao(req, res);
});

module.exports = router;