/*
	# Lan House JS ::::::::::::::::::::::::::::::::::::::::::::::::::
	## Elaborar um programa para uma Lan House de um aeroporto.

	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	- O programa deve ler o valor de cada 15 minutos de uso
	de um computador e o tempo de uso por um cliente em minutos;

	- Informe o valor a ser pago pelo cliente, sabendo que as frações
	extras de 15 minutos, devem ser cobradas de forma integral.

	:::::::   valor: 2; Tempo 35; resultado: 6 reais a pagar  :::::::
*/

function calcularTempoDeUso() {
	const inValor15Minutos = document.getElementById("inValor15Minutos");
	const inTempoUsoCliente = document.getElementById("inTempoUsoCliente");

	const outValorPagar = document.getElementById("valorPagar");

	const valor15Minutos = Number(inValor15Minutos.value);
	const tempoUsoCliente = Number(inTempoUsoCliente.value);


	const valorSerPagoCliente = Math.ceil(tempoUsoCliente / 15) * valor15Minutos;

	outValorPagar.textContent = "O valor total a pagar é de " + valorSerPagoCliente.toFixed(2) + " reais."
}

// Botão
const btnCalcularValorTotal = document.getElementById("btnCalcularValorTotal");
btnCalcularValorTotal.addEventListener("click", calcularTempoDeUso);
