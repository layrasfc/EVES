function enviar() {
    let email = document.getElementById("emails").value;
    let data = document.getElementById("dataDia").value;
    let horario = document.getElementById("horario").value;
    let lugar = document.getElementById("local").value;
    let evento = document.querySelector("#rectangleRoundedSelect").value

    console.log(email)
    console.log(data)
    console.log(horario)
    console.log(lugar)
    console.log(evento)

    fetch(`http://0.0.0.0:8000/${email}/${data}/${horario}/${lugar}/${evento}`)
}

document.getElementById('enviar_email').addEventListener('click', enviar());