/*
	# Programa par ou impar.

	- Eçaborar um programa que leia um número.
	- Informe se ele é par ou impar.
*/

function verificarParImpar() {
	let inNumero = document.getElementById("inNumero");
	let outResultado = document.getElementById("outResultado");

	let numeroInserido = Number(inNumero.value);

	// Verifica se é um número válido.
	if (numeroInserido == 0 || isNaN(numeroInserido)) {
		alert("Por favor, insira um número inteiro válido.");
		inNumero.focus();
		return
	}

	// Verifica se é um número par ou impar.
	if (numeroInserido % 2 === 0) {
		outResultado.textContent = "O número " + numeroInserido + " é PAR.";
	} else {
		outResultado.textContent = "O número " + numeroInserido + " é IMPAR."
	}
}

const btnResultado = document.getElementById("btnResultado");
btnResultado.addEventListener("click", verificarParImpar);
