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
        


document.getElementById('proximo').addEventListener('click', function() {
    
    var nomeGP1 = document.getElementById('nomeGrupo1').value
    var nomeParticipante1 = document.getElementById('nomeParticipante1').value
    var descricao1 = document.getElementById('descricaoProjeto1').value    

    localStorage.setItem('nomeGrupo1', nomeGP1);
    localStorage.setItem('NomeP1',nomeParticipante1);
    localStorage.setItem('descricaoP1', descricao1);

    window.location.href = './Formulario2.html';
   
});

