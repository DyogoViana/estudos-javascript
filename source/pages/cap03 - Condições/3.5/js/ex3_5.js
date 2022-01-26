/*
	# Programa Raiz Quadrada.

	- Elaborar um programa que leia um númeto e calcule sua raiz quadrada.
	- Caso a raiz seja exata, informaá-la, caso contrário, informe: "Não há raiz exata oara ...".
*/

function calcularRaizQuadrada() {
	let inNumero = document.getElementById("inNumero");
	let outResultadoRaizQuadrada = document.getElementById("outResultadoRaizQuadrada");

	let numero = Number(inNumero.value);

	if (numero == 0 || isNaN(numero)) {
		alert("Por favor preencha um número válido.");
		inNumero.focus();
		return;
	}

	let raizNumero = Math.sqrt(numero);

	if (raizNumero == Math.floor(raizNumero)) {
		outResultadoRaizQuadrada.textContent = "Raiz: " + raizNumero;
	} else {
		outResultadoRaizQuadrada.textContent = "O número " + numero + " não tem uma raiz exata.";
	}
}

const btnExibirRaizQuadrada = document.getElementById("btnExibirRaizQuadrada");
btnExibirRaizQuadrada.addEventListener("click", calcularRaizQuadrada);
