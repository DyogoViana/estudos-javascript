/*
	# Programa Números Perfeitos

	- Um número dito perfeito é aquele que é igual à soma dos seus divisores
	inteiros (exceto o próprio número).

	- O programa deve exibir os divisores do número e a soma deles.
*/

/*
Dizemos que um número natural é perfeito se é igual à soma de todos os seus fatores (divisores), excluindo ele próprio. Por exemplo, 6 e 28 são números perfeitos, veja:

6 = 1 + 2 + 3 (fatores de 6: 1, 2, 3 e 6), excluímos o número 6.

28 = 1 + 2 + 4 + 7 + 14 (fatores de 28: 1, 2, 4, 7, 14, 28), excluímos o 28.


Os números de Mersenne são aqueles na forma Mn = 2n – 1. Ele chegou a cogitar que essa expressão seria capaz de calcular possíveis números primos considerando n = primos, mas posteriormente ficou comprovado que ele estava quase certo. Por exemplo
*/

function verificarNumeroPerfeito() {
	let inNumero = document.getElementById("inNumero");
	let outDivisores = document.getElementById("outDivisores");
	let outResultado = document.getElementById("outResultado");

	let numero = Number(inNumero.value);

	if (numero == "" || numero == 0 || isNaN(numero)) {
		alert("Por favor, insira um valor numérico válido.");
		inNumero.focus();
		return;
	}

	// Como 1 é um divisor universal, já iniciamos com ele.
	let divisores = "Divisores do " + numero + ": 1";
	let soma = 1;

	// Pecorre os possíveis divisores e acumula.
	for (let i = 2; i <= numero / 2; i++) {
		if (numero % i == 0) {
			divisores = divisores + ", " + i; // vírgula + i (evita última vírgula).
			// soma = soma + i;
		}
	}

	// divisores = divisores + " (Soma: " + soma + ")";

	outDivisores.textContent = divisores;

	// verifica se é perfeito e exibe resposta na tag outResposta.
	if (numero == soma) {
		outResultado.textContent = numero + " É um número perfeito."
	} else {
		outResultado.textContent = numero + " Não é um número perfeito."
	}
}

const btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", verificarNumeroPerfeito);

