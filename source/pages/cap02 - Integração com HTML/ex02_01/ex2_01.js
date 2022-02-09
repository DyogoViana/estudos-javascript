// Capítulo 02, exercício 01.

function mostrarSaudacao() {
	let nome = document.getElementById("nome").value;
	document.getElementById("resposta").textContent = "Oi " + nome;
}

let mostrar = document.getElementById("mostrar");

mostrar.addEventListener("click", mostrarSaudacao);
