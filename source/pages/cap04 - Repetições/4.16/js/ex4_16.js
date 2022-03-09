/*
	# Programa Criação de Chinchilas

	- Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano.
	- Elaborar um programa que leia o número inicial de chinchilas e anos.
	- Informe ano a ano o número médio previsto de chinchilas da fazenda.
	- Validar a entrada para que o número inicial de chinchilas seja maior ou igual a 2 (um casal).
*/


function mostrarPrevisaoChinchilas() {
	let inChinchilas = document.getElementById("inChinchilas");
	let inAnos = document.getElementById("inAnos");
	let outPrevisao = document.getElementById("outPrevisao");

	let chinchilas = Number(inChinchilas.value);
	let anos = Number(inAnos.value);

	if (chinchilas < 2 || chinchilas == "" || anos == "" || anos == 0 || isNaN(chinchilas || isNaN(anos))) {
		alert("Por favor, insita um número.");
		inAnos.focus();
		return;
	}

	let emBranco = "";
	let total = chinchilas;

	for ( let i = 1; i <= anos; i++) {
		emBranco = emBranco + i + "º Ano: " + total + " Chinchilas\n";
		total = total * 3;
	}

	outPrevisao.textContent = emBranco;
}

const btnMostrarPrevisao = document.getElementById("btnMostrarPrevisao");
btnMostrarPrevisao.addEventListener("click", mostrarPrevisaoChinchilas);

