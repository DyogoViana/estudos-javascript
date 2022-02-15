/*
	# Programa Lados de um triângulo.
	Elaborar um programa que leia e verifique se eles podem ou não formar um triângulo.
	Para formar um triãngulo, um dos lados não pode ser maior que a soma dos outros lados.
	caso possam formar um triãngulo, exiva também qual o tipo do triãngulo.

	::::: Tipos de triãngulo ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	Equilátero = 3 lados iguais;
	Isósceles = 2 lados iguais;
	Escaleno = 3 lados diferentes;
*/


function verificarLadosTriangulo() {
	let inLadoA = document.getElementById("inLadoA");
	let inLadoB = document.getElementById("inLadoB");
	let inLadoC = document.getAnimations("inLadoC");
	let outConfirmacao = document.getElementById("outConfirmacao");
	let outTipoTriangulo = document.getElementById("outTipoTriangulo");

	let ladoA = Number(inLadoA.value);
	let ladoB = Number(inLadoB.value);
	let ladoC = Number(inLadoC.value);

	// if (ladoA == 0 || ladoB == 0 || ladoC == 0 || isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
	// 	alert("Informe lados válidos para o triângulo");
	// 	inLadoA.focus();
	// 	return;
	// }


	if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
		outConfirmacao.textContent = "Lados não podem formar um triângulo";
	} else {
		outConfirmacao.textContent = "Lados podem formar um triângulo";
		if (ladoA == ladoB && ladoA == ladoC) {
			outTipoTriangulo.textContent = "Tipo: Equilátero";
		} else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
			outTipoTriangulo.textContent = "Tipo: Isósceles";
		} else {
			outTipoTriangulo.textContent = "Tipo: Escaleno";
		}
	}
}

const btnVerificarLados = document.getElementById("btnVerificarLados");
btnVerificarLados.addEventListener("click", verificarLadosTriangulo);
