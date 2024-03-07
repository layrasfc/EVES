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


document.getElementById('proximo2').addEventListener('click', function() {
    console.log("AA")
    localStorage.setItem('nomeGrupo2', document.getElementById('nomeGrupo2').value);
    localStorage.setItem('nomeParticipante2', document.getElementById('nomeParticipante2').value);
    localStorage.setItem('descricaoProjeto2', document.getElementById('descricaoProjeto2').value);
    
    window.location.href = './Formulario3.html';    
    
});