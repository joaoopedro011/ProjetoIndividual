  function quizBD() {
        var id = sessionStorage.ID_USUARIO;
        fetch("/class/quiz", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idServer: id,
                quizServer: classeFinal
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);
                if (resposta.ok) {

                    console.log("classe inserida no banco de dados")

                    setTimeout(() => {
                        window.location = "index.html";
                    }, "2000");
                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

            setTimeout(() => {
                window.location = "index.html"
            }, 3000);
        return false;

    }