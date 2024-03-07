async function entrar() {

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    try {
      const response = await fetch('/js/credenciais.json');

      if (!response.ok) {
        console.error('Erro ao carregar o arquivo JSON:', response.statusText);
        document.getElementById("login-status").innerText = "Erro ao carregar as credenciais. Tente novamente.";
        return;
      }

      const data = await response.json();

      const user = data.users.find(user => user.username === usuario && user.password === senha);

      if (user) {
        console.log("Deu certo");
        (window.location.href = './OpcaoADM.html')
      } else {
        document.getElementById("login-status").innerText = "Usuário ou senha incorretos, tente novamente.";
        console.log("Deu bosta");
      }
    } catch (error) {
      console.error('Erro ao carregar ou processar o arquivo JSON:', error);
      document.getElementById("login-status").innerText = "Erro ao carregar ou processar as credenciais. Tente novamente.";
    }
  };

  document.getElementById('botaoEntrar').addEventListener('click', entrar); 
