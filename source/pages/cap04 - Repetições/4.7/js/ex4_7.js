// Programa - Fábrica de Estrelas.

function preencherEstrelas() {
	let inNumero = document.getElementById("inNumero");
	let outEspacos = document.getElementById("outEspacos");

	let numero = Number(inNumero.value);

	if (numero == 0 || numero == "" || isNaN(numero)) {
		alert("Por favor, insira um valor numérico válido.");
		inNumero.focus();
		return;
	}

	let simbolos = "";

	// Criar um loop de repetição de 1 até o número informado.
	for (let i = 1; i <= numero; i++) {
		if (i % 2 == 1) {
			simbolos = simbolos + " * "; // Posição impar do i: *
		} else {
			simbolos = simbolos + " | "; // Posição par do i: -
		}
	}

	outEspacos.textContent = simbolos // Exibe os símbolos.
}

const btnPreencherEspaco = document.getElementById("btnPreencherEspaco");
btnPreencherEspaco.addEventListener("click", preencherEstrelas);
