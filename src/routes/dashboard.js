var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/pontuacao/:idUsuario", function(req, res) {
    dashboardController.pontuacao(req, res);
})

router.get("/grafico/:idUsuario", function (req, res) {
    dashboardController.grafico(req, res);
});



module.exports = router;