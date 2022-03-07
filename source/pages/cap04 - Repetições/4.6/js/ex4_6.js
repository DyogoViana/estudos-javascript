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

	// Declara e inicializa a variável tipo flag.
	let temDivisor = 0;

	// Pecorre as possíveis divisões do 'numero'.
	for (let i = 2; i <= numero / 2; i++) {
		if (numero % i == 0) {
			temDivisor = 1; // muda o flag.
			break;
		}
	}

	// Se 'numero' > 1 e não possui divisor.
	if (numero > 1 && !temDivisor) {
		outResposta.textContent = numero + " é primo."
	} else {
		outResposta.textContent = numero + " não é primo."
	}
}

const btnVerificarNumeroPrimo = document.getElementById("btnVerificarNumeroPrimo");
btnVerificarNumeroPrimo.addEventListener("click", verificarPrimo);
