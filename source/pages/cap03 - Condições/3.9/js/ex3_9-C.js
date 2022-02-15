/*
	#	Programa Parquímetro.
		Elaborar um programa para simular um parquímetro, o quel leia o valor
		de moedas depositadas em um terminal de estacionamento rotativo.

		- O programa deve informar o tempo de permanência do veículo no local e o
		troco (se existir).

		- Se o valor for infeior ao tempo mínimo, exiba a mensagem:
		"Valor insuficiente".


		:::::  valores :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

				valor  |  Tempo (min.)
				1,00      30'
				1,75      60'
				3,00      120'

		::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

*/

function calcularParquimetro() {
	let inValor = document.getElementById("inValor");
	let outTempo = document.getElementById("outTempo");
	let outTroco = document.getElementById("outTroco");

	const valorParquimetro = Number(inValor.value);

	if (valorParquimetro.value == "" || valorParquimetro == 0 || isNaN(valorParquimetro)) {
		alert("Por favor, insira um valor válido");
		valorParquimetro.focus();
		return;
	}


	// tempo mininmo 30' ou R$ 1,00.
	if (valorParquimetro < 1) {
		outTempo.textContent = "valor insuficiente -- " + valorParquimetro;
	}


	let tempo;
	let troco;

	if (valorParquimetro >= 3.00) {
		tempo = 120;
		troco = valorParquimetro - 3.00
	} else if (valorParquimetro >= 1.75) {
		tempo = 60;
		troco = valorParquimetro - 1.75;
	} else {
		tempo = 30;
		troco = valorParquimetro - 1.00;
	}

	// exibe resostas.
	outTempo.textContent = "Tempo: " + tempo + " minutos.";
	if (troco > 0) {
		outTroco.textContent = "Troco R$: " + troco.toFixed(2);
	}
}

const btnConfirmarDeposito = document.getElementById("btnConfirmarDeposito");
btnConfirmarDeposito.addEventListener("click", calcularParquimetro);
