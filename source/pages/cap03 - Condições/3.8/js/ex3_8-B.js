/*
	# Programa Verifica Velocidade.
	Elaborar um programa que leia a velocidade permitida em uma estrada
	e a velocidade de um motorista.

	- Se a velocidade for inferior ou igual à
	permitida, exiba "Sem Multa".

	- Se a velocidade for de até 20% maior que a permitida,
	exiba "Multa Leve".

	- E, se a velocidade for superior à 20% da velocidade permitida
	exiba "Multa Grave".
*/

function verificarVelocidadePermitida() {
	const inVelocidadePermitida = document.getElementById("inVelocidadePermitida");
	const inVelocidadeMotorista = document.getElementById("inVelocidadeMotorista");
	const outResultadoMulta = document.getElementById("outResultadoMulta");

	const velocidadePemitida = Number(inVelocidadePermitida.value);
	const velocidadeMotorista = Number(inVelocidadeMotorista.value);

	//Verificar se foi preenchido corretamente.
	if (inVelocidadePermitida.value == "" || isNaN(velocidadePemitida) ||
		 inVelocidadeMotorista.value == "" || isNaN(velocidadeMotorista)) {
			alert("Por favor, insita um valor válido de velocidade.");
			inVelocidadePermitida.focus();
			return;
	}

	// Cria as condições para verificar situação do motorista.
	if (velocidadeMotorista <= velocidadePemitida) {
		outResultadoMulta.textContent = "Situação: SEM MULTA";
	} else {
		let limiteTolerancia = velocidadePemitida * 1.20;

		if (velocidadeMotorista <= limiteTolerancia) {
			outResultadoMulta.textContent = "Situação: MULTA LEVE";
		} else {
			outResultadoMulta.textContent = "Situação: MULTA GRAVE";
		}
	}
}


const btnVerificarVelocidade = document.getElementById("btnVerificarVelocidade");
btnVerificarVelocidade.addEventListener("click", verificarVelocidadePermitida);
