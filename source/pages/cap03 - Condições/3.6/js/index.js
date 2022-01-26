/*
	# Programa Caixa Eletrônico.

	## Em um determinado momento do dia, apenas notas de 10, 50 e 100
	estão disponíveis em um termonal de caixa eletrônico.

	- Elaborar um programa que leia um valor de saque de um cliente.

	- Verifique sua validade (se pode ser pago com as notas disponíveis)
	e informe o número mínimo de notas de 100, 50 e 10 necessárias para
	pagar esse saque.
*/

function exibirValorSaques() {
	let inValorSaque = document.getElementById("inValorSaque");
	let outResultadoSaque = document.getElementById("outResultadoSaque");
	let valorSaque = Number(inValorSaque.value);

	outResultadoSaque.textContent = "O que vem, vem " + valorSaque;
}

const btnExibirNotasSaque = document.getElementById("btnExibirNotasSaque");
btnExibirNotasSaque.addEventListener("click", exibirValorSaques);
