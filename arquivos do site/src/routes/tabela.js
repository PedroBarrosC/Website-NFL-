var express = require("express");
var router = express.Router();

var tabelaController = require("../controllers/tabelaController");

router.get("/listar", function (req, res) {
    tabelaController.listar(req, res);
});

module.exports = router;
