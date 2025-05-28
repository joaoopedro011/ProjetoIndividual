  


 function cadastrar(){
      var nome = nome_input.value;
      var email = email_input.value;
      var senha = senha_input.value;
      var confirmarSenha = confirmacao_senha_input.value;

      if (nome == ''|| email == ''|| senha == '' || confirmarSenha == ''){
        alert('Todos os campos são obrigatórios!')
      }
      else if (senha != confirmarSenha){
        alert('Preencha os campos com as mesmas senhas!')
      }
      else if (email.includes('@') && email.includes('.')){
        alert('Sua conta foi registrada. Seja-bem vindo fiel!');

           fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nome,
        emailServer: email,
        senhaServer: senha
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {

          setTimeout(() => {
            window.location = "./login.html";
          }, "2000");

          limparFormulario();
          finalizarAguardar();
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

    return false;
  
      }
      else{
        alert('O e-mail é inválido!')
      }
      
    }

