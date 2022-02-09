/*
	# Restaurante JS

	- Elaborar um programa para um restaurante que leia o preço por kg
	e o consumo (em gramas) de um cliente. Exiba o valor a ser pago.
*/


function calcularValorTotal() {
	const inValorQuilo = document.getElementById("inValorQuilo");
	const inConsumoCliente = document.getElementById("inConsumoCliente");

	const outValorPagar = document.getElementById("outValorPagar");

	const valorQuilo = Number(inValorQuilo.value);
	const consumoCliente = Number(inConsumoCliente.value);


	const valorPagar = (valorQuilo / 1000) * consumoCliente;

	outValorPagar.textContent = "valor a pagar R$: " + valorPagar.toFixed(2);
}

const btnCalcularPreco = document.getElementById("btnCalcularPreco");
btnCalcularPreco.addEventListener("click", calcularValorTotal);
