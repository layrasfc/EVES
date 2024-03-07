function lerPagina(number) {
  var elementosTexto = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, alt, div, a, li, td, th, label, button');
  var textoCompleto = Array.from(elementosTexto).map(function(elemento) {
    return elemento.textContent || elemento.innerText || '';
  }).join(' ');

  if(number == 1) {responsiveVoice.speak(textoCompleto, 'Brazilian Portuguese Female', { rate: 1.4});}
  if(number == 2) {responsiveVoice.speak("", 'Brazilian Portuguese Female', { rate: 0 });}
}

let narreNovamente = true;
let imageVolume = document.querySelector("#volumePIcon")

let buttonCb = document.getElementById('cb') 
buttonCb.addEventListener('click', () => {
      if (document.querySelector('#cb').checked){
        lerPagina(1)
        imageVolume.setAttribute('src', 'images/Icons/volume-VERDE.svg');
        console.log('test')
      }
      else{
        lerPagina(2)
        imageVolume.setAttribute('src', 'images/Icons/volume-preto.svg');
      }
})

let largura = window.screen.width;

if (largura <= 1023){
  buttonNarrar.innerHTML = `<p class="menuItem">Leitura de voz</p>`
}
/*
function lerPagina() {
    var elementosTexto = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, alt, div, a, li, td, th, label, button');
    var textoCompleto = Array.from(elementosTexto).map(function(elemento) {
      return elemento.textContent || elemento.innerText || '';
    }).join(' ');

    responsiveVoice.speak(textoCompleto, 'Brazilian Portuguese Female', { rate: 1.8 });
}

let narreNovamente = true;
const buttonNarrar = document.getElementById('narrarOption') 
buttonNarrar.addEventListener('click', () => {
        buttonNarrar.style.backgroundColor = "rgb(249, 249, 249)";
        lerPagina()
})

let largura = window.screen.width;

if (largura <= 1023){
    buttonNarrar.innerHTML = `<p class="menuItem">Leitura de voz</p>`
}
*/