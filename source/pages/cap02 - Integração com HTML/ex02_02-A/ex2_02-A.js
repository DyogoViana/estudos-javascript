/*

	# Vídeo Locadora.

	- Elaborar um programa para video locadora, que leia o título e a duração
	de um filme em minutos. Exiba o título do filme e converta a duração para
	horas e minutos.

*/

function converterDuracao() {
	const inTitulo = document.getElementById("inTitulo");
	const inDuracao = document.getElementById("inDuracao");

	const outTitulo = document.getElementById("outTitulo");
	const outResposta = document.getElementById("outResposta");

	// Obtem conteúdos dos campos de entrada.
	const titulo = inTitulo.value;
	const duracao = Number(inDuracao.value);

	// Arredonda para baixo o resultado da divisão.
	const horas = Math.floor(duracao / 60);

	// Obtem o resto da divisão entre os números.
	const minutos = duracao % 60;

	// Altera o conteúdo dos parágrafos de resposta.
	outTitulo.textContent = titulo;
	outResposta.textContent = horas + " horas(s) e " + minutos + " minuto(s).";
}


// Cria referência ao elemento btnConverter (botão).
const btnConverter = document.getElementById("btnConverter");

// Registra um evento associado ao botão, para carregar uma função.
btnConverter.addEventListener("click", converterDuracao);
