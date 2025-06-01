var express = require("express");
var router = express.Router();

var gameController = require("../controllers/gameController");

//Recebendo os dados do html e direcionando para a função cadastrar de gameController.js

router.post("/autenticar", function (req, res) {
    gameController.cadastrar(req, res);
});
router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    gameController.listar(req, res);
});

module.exports = router;