/*
	# Programa Fuso Horário.

	- Sabendo que o fuso horário da França em relação ao Brasil é
	de +5 horas (horário de verão da França).

	- Elaborar um programa que leia a hora no Brasil e informe a hora na França.
*/

function fusoHorario() {
	let inHoraBrasil = document.getElementById("inHoraBrasil");
	let outResultadoFuso = document.getElementById("outResultadoFuso");

	horaBrasil = Number(inHoraBrasil.value);

	if (inHoraBrasil.value == "" || isNaN(horaBrasil)) {
		alert("Por favor, informe a hora do Brasil corretamente.");
		inHoraBrasil.focus();
		return;
	}

	let horaFranca = horaBrasil + 4;

	// Se passar das 24h na frança...
	if (horaFranca > 24) {
		horaFranca = horaFranca - 24;
	}

	outResultadoFuso.textContent = "Hora na França: " + horaFranca.toFixed(2);
}

const exibirHoraFranca = document.getElementById("exibirHoraFranca");
exibirHoraFranca.addEventListener("click", fusoHorario);

