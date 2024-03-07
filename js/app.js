/* Deixar a opção ativada menu burger */
(function(){
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('#'+burger.dataset.target);

  burger.addEventListener('click', function(){
      burger.classList.toggle('is-active');
      nav.classList.toggle('is-active');
  })
})();


/* Função de verificar a pesquisa */
function verificarPesquisa() {
  const pesquisaInput = document.getElementById('pesquisaCampo');
  pesquisaInput.addEventListener('keydown', async (event) => {
    var termoPesquisa = pesquisaInput.value;
    termoPesquisa = termoPesquisa.toUpperCase();

    const response = await fetch('/js/pages.json');
    const data = await response.json();

    const resultadosFiltrados = data.itens.filter(item => item.evento.includes(termoPesquisa));
    listaResultados.innerHTML = '';

    if (resultadosFiltrados.length !== 0 && termoPesquisa !== "") {
        console.log("Encontrei:", resultadosFiltrados);

        resultadosFiltrados.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('listaResults')
            li.addEventListener('click', () => {
                window.location.href = item.link;
            });

            li.textContent = item.title
            listaResultados.appendChild(li);
        });
        } 
    else {
        console.log("Nada");
    } 
})
  
}

const botaoPesquisa = document.getElementById('pesquisaBotao');
const divPesquisa = document.getElementById('pesquisando');
const listaResultados = document.getElementById('lista-resultados');

/* Criando campo de pesquisa */
const inputPesquisa = document.createElement('div');
inputPesquisa.classList.add('inputPesquisa');
inputPesquisa.innerHTML = `<input type="text" name="" id="pesquisaCampo" placeholder="Pesquise aqui.." class="pesquisaCampo">`;

/* Variáveis */
let ligado = false; 
let largura = window.screen.width;
const navOption = document.querySelector('div.navbar-dropdown');

/* Evento por largura da tela */
if(largura > 1023){
  /* Menu Effect */ 
  navOption.style.width = '3%';
  console.log(navOption)
  botaoPesquisa.addEventListener('click', () => {
    if (!ligado) { 
      divPesquisa.insertBefore(inputPesquisa, botaoPesquisa)
      verificarPesquisa()
      ligado = true;
    } else if(ligado) { 
      divPesquisa.removeChild(inputPesquisa);
      ligado = false;
      listaResultados.innerHTML = '';
    };
  });
} else if (largura <= 1023){
  divPesquisa.appendChild(inputPesquisa)
  divPesquisa.removeChild(botaoPesquisa)
  verificarPesquisa()
}

