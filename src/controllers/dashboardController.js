var dashboardModel = require("../models/dashboardModel");

function pontuacao(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        console.log('idUsuario está indefinido!')
        window.location = '../login.html'
    } else {
        dashboardModel.pontuacao(idUsuario)
        .then(
            function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve erro ao buscar dados das KPIs! ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
        );
    }
}

function grafico(req, res) {
        var idUsuario = req.params.idUsuario;

        if (idUsuario == undefined) {
            console.log('id de usuario indefinido');
        } else {
        dashboardModel.grafico(idUsuario)
        .then(
            function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve erro ao buscar dados do Gráfico! ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
        );
        }
    }
    



module.exports = {
    pontuacao,
    grafico
}