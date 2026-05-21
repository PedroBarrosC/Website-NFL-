var express = require("express");
var router = express.Router();
var kpisController = require("../controllers/kpisController");

router.get("/", kpisController.obterKpis);

module.exports = router;