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
      else if (email.includes('@','.')){
        alert('Sua conta foi registrada. Seja-bem vindo fiel!');
        window.location = 'login.html'
      }
      else{
        alert('O e-mail é inválido!')
      }
      
    }




    