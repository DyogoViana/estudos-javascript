/*
	# Programa Números Decrescente.
*/

function decrescerNumero() {
	let inNumero = document.getElementById("inNumero");
	let outResposta = document.getElementById("outResposta");

	let numero = Number(inNumero.value);

	if (numero == 0 || isNaN(numero)) {
		alert("Por favor, insira um número. =)");
		inNumero.focus();
		return;
	}

	let resposta = "Entre " + numero + " e 1:" ;

	for (var i = numero; i > 1; i--) {
		resposta = resposta + i + ", ";
	}
	resposta = resposta + i + ".";


	outResposta.textContent = resposta;
}

const btnDecrescerNumero = document.getElementById("btnDecrescerNumero");
btnDecrescerNumero.addEventListener("click", decrescerNumero);
