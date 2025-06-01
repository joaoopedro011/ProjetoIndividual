var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", acerto, erro)
    var instrucaoSql = `

       
        SELECT * FROM pontuacao WHERE fkUsuario = '${idUsuario}';`
       ;}
       function cadastrar(acerto, erro){
    var instrucaoSql = `INSERT INTO pontuacaoJogo (${acerto}, ${erro}) VALUES;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listar 
};