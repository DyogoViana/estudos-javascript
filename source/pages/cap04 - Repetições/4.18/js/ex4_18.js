/*
	# Programa: Fábrica de estrelas 02

	- Elaborar uma programa que leia um número e exiba estrelas na página, em linhas diferentes.

	- A cada nova linha, o número de estrelas deve ser incrementado.

	- Observação: caso você informe um valor alto, as linhas podem ultrapassar o tamanho da imagem e
		se alinhar à margem esquerda da página. Para evitar que isso ocorra, crie uma nova classe no arquivo
		'estilo.css', que defina uma flutuação à direita para essa imagem.
*/

function criarEstrelas() {
	let inNumeroLinhas = document.getElementById("inNumeroLinhas");
	let outResposta = document.getElementById("outResposta");

	let numerosLinhas = Number(inNumeroLinhas.value);

	if (numerosLinhas == "" || numerosLinhas == 0 || isNaN(numerosLinhas)) {
		alert("POr favor, insira uma valor numérico.");
		inNumeroLinhas.focus();
		return;
	}

	let emBranco = "";

	for (let linha = 1; linha <= numerosLinhas; linha++) {
		// dentro dessa repetição é criada uma outra (para cada linha, até i)
		for (let coluna = 1; coluna <= linha; coluna++) {
			emBranco = emBranco + "*"
		}
		emBranco = emBranco + "\n";
	}

	outResposta.textContent = emBranco;
}

const btnCriarEstrelas = document.getElementById("btnCriarEstrelas");
btnCriarEstrelas.addEventListener("click", criarEstrelas);
