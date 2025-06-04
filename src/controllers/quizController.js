var quizModel = require("../models/quizModel");


function fazerquiz(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.params.id;
    var pontos = req.body.pontosServer;

    // Faça as validações dos valores
    if (idUsuario == undefined) {
        res.status(400).send("Seu id está Indefinido!");
    } else if (pontos == undefined) {
        res.status(400).send("Sua pontuacao está Indefinido!");
    } else {
        quizModel.cadastrar(idUsuario, pontos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    fazerquiz
}