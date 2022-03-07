// Programa Números Primos

function verificarPrimo() {
	let inNumero = document.getElementById("inNumero");
	let outResposta = document.getElementById("outResposta");

	let numero = Number(inNumero.value);

	if (numero == 0 || isNaN(numero)) {
		alert ("Por favor, insita um valor numérico válido.")
		inNumero.focus();
		return;
	}

	let numerosDivisores = 0; // Declara e inicializa contador.

	// Pecorre todos os possíveis divisores do número.
	for (let count = 1; count <= numero; count++) {
		// Verifica se 'count' (1, 2, 3...) é um divisor do 'numero'.
		if (numero % count == 0) {
			numerosDivisores++; // Se é, incrementa contador.
		}
	}

	// Se possui apenas 2 divisores, é primo.
	if (numerosDivisores == 2) {
		outResposta.textContent = numero + " é um número primo.";
	} else {
		outResposta.textContent = numero + " NÃO é um número primo."
	}

}

const btnVerificarNumeroPrimo = document.getElementById("btnVerificarNumeroPrimo");
btnVerificarNumeroPrimo.addEventListener("click", verificarPrimo);
