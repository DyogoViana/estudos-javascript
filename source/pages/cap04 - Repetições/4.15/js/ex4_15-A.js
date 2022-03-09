/*
	# Programa Repete Fruta

	- Elaborar umm programa que leia o nome de uma fruta e um número.
	O programa deve repetir a exibição do nome da fruta, de acordo com o número informado.
*/



function repetirFrutas() {
	let inFruta = document.getElementById("inFruta");
	let inNumero = document.getElementById("inNumero");
	let outResposta = document.getElementById("outResposta");

	let fruta = inFruta.value;
	let numero = Number(inNumero.value);

	if (fruta == "" || numero == 0 || isNaN(numero)) {
		alert("Informe corretamente os dados");
		inFruta.focus();
		return;
	 }


	let resposta = "";

	for (let i = 1; i < numero; i++) {
		//... a cada volta, adiciona uma fruta.
		resposta = resposta + fruta + " * ";
	}

	// Isola a última fruta, para não exibir '*' no final.
	resposta = resposta + fruta;
	outResposta.textContent = resposta;
}

const btnRepetirFruta = document.getElementById("btnRepetirFruta");
btnRepetirFruta.addEventListener("click", repetirFrutas);
