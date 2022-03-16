/*
	# Jogo descubra o número -- indexOf
*/

let erros = []; // números já apostados.
let sorteado = Math.floor(Math.random() * 100) + 1; // Número aleatório 1 ~ 100.

const tentativas = 6;

function apostarNumeros() {
	let inNumero = document.getElementById("inNumero");
	let numero = Number(inNumero.value);

	if (numero <= 0 || numero > 100 || isNaN(numero)) {
		alert("Informe um número válido.");
		inNumero.focus();
		return;
	}

	let outErros = document.getElementById("outErros");
	let outTentativas = document.getElementById("outTentativas");
	let outDica = document.getElementById("outDica");

	// Se a aposta for igual ao número sortiado.
	if (numero == sorteado) {
		alert("Parabéns!" + "\n" + "Você acertou!");
		btnApostar.disabled = true; // Troca status do botão.
		btnJogarNovamente.className = "exibe";
		outDica.textContent = "Parabéns!" + "\n" + "Número sorteado: " + sorteado;
	} else {
		if (erros.indexOf(numero) >= 0) {
			alert("Você já apostou o número " + numero + ". tente outro número...");
		} else {
			erros.push(numero); // Adiciona número ao vetor.
			let numeroErrors = erros.length; // Obtém tamanho do vetor.
			let numeroTentativas = tentativ
			as - numeroErrors; // Calcula número de chances.

			outErros.textContent = numeroErrors + " (" + erros.join(", ") + ")";
			outTentativas.textContent = numeroTentativas;

			if (numeroTentativas == 0) {
				alert("Suas chances acabaram...");
				btnApostar.disabled = true;
				btnJogarNovamente.className = "exibe";
				outDica.textContent = "GAME OVER" + "\n" + "Número sorteado" + sorteado;
			} else {
				let dica = numero < sorteado ? "maior" : "menor";
				outDica.textContent = "Dica: Tente um número " + dica + " que " + numero;
			}
		}
	}

	inNumero.value = ""; // limpa o campo inNumero.
	inNumero.focus();
}

const btnJogarNovamente = document.getElementById("btnJogarNovamente");
btnJogarNovamente.addEventListener("click", apostarNumeros);






