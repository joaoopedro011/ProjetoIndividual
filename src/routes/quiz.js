var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/fazerquiz/:id", 
    quizController.fazerquiz);

module.exports = router;