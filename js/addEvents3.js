let input = document.getElementById("file-upload");
        let imageName = document.getElementById("imageName")

        input.addEventListener("change", ()=>{
            let inputImage = document.querySelector("input[type=file]").files[0];
            let img = document.querySelector("#imgIcon");

            placeholder.innerText = inputImage.name;
            placeholder.style.color = "black";
            placeholder.style = "font-weight: 350; color: black"
            customFileUpload.style = "border: 1px solid #485fc7; box-shadow: 0 0 0 0.125em rgba(72,95,199,.25);";  
            img.setAttribute('src', 'images/Icons/image-black.svg');
  

        })


document.getElementById('proximo3').addEventListener('click', () => {

    localStorage.setItem('nomeGrupo3', document.getElementById('nomeGrupo3').value);
    localStorage.setItem('nomeParticipante3', document.getElementById('nomeParticipantes3').value);
    localStorage.setItem('descricaoProjeto3', document.getElementById('descricaoProjeto3').value);
    
    var nomeGrupo1 = localStorage.getItem('nomeGrupo1');
    var participantes1 = localStorage.getItem('nomeParticipante1');
    var descricaoProjeto1 = localStorage.getItem('descriccaoProjeto1');

    var nomeGrupo2 = localStorage.getItem('nomeGrupo2');
    var participantes2 = localStorage.getItem('nomeParticipante2');
    var descricaoProjeto2 = localStorage.getItem('descriccaoProjeto2');

    var nomeGrupo3 = localStorage.getItem('nomeGrupo3');
    var participantes3 = localStorage.getItem('nomeParticipante3');
    var descricaoProjeto3 = localStorage.getItem('descriccaoProjeto3');

var resumoHTML = `
    <h2>Grupo 1</h2>
    <p>Nome: ${nomeGrupo1}</p>
    <p>Participantes: ${participantes1}</p>
    <p>Descrição do Projeto: ${descricaoProjeto1}</p>

    <h2>Grupo 2</h2>
    <p class="nomeGrupo">Nome: ${nomeGrupo2}</p>
    <p>Participantes: ${participantes2}</p>
    <p>Descrição do Projeto: ${descricaoProjeto2}</p>

    <h2>Grupo 3</h2>
    <p>Nome: ${nomeGrupo3}</p>
    <p>Participantes: ${participantes3}</p>
    <p>Descrição do Projeto: ${descricaoProjeto3}</p>
`;

    document.getElementById('resumo').innerHTML = resumoHTML;

    // Exiba o modal e overlay
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
})

function fecharResumo() {
    // Oculte o modal e overlay
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
}

function confirmarResumo() {
    // Lógica para confirmar o resumo (pode ser adicionada conforme necessário)
    alert('Resumo confirmado!');

    // Feche o modal e overlay
    fecharResumo();
}

