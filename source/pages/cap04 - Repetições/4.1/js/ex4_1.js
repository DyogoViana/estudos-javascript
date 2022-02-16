/*
	# Programa Tabuada
*/

function mostrarTabuada() {
	let inNumero = document.getElementById("inNumero");
	let outResultado = document.getElementById("outResultado");

	let numero = Number(inNumero.value);

	if (numero == 0 || isNaN(numero)) {
		alert("Por favor, insira um número interio real.");
		inNumero.focus();
		return;
	}

	// Cria uma variável do tipo string, que irá concatenar a resposta.
	let resposta = "";

	for (let i = 1; i <= 10; i++) {
		// a variável 'resposta' vai acumulando os novos conteúdos.
		resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";
	}

	// O conteúdo da tag 'pre' é alterado para exibir a tabuada do num.
	outResultado.textContent = resposta;

 }

 const btnMostrarTabuada = document.getElementById("btnMostrarTabuada");
 btnMostrarTabuada.addEventListener("click", mostrarTabuada);

