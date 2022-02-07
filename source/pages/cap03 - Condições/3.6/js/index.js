/*
	# Programa Caixa Eletrônico.

	## Em um determinado momento do dia, apenas notas de 10, 50 e 100
	estão disponíveis em um terminal de caixa eletrônico.

	- Elaborar um programa que leia um valor de saque de um cliente.

	- Verifique sua validade (se pode ser pago com as notas disponíveis)
	e informe o número mínimo de notas de 100, 50 e 10 necessárias para
	pagar esse saque.


	valor inserido = 280.00
	notas: {
		100.00: 2
		50.00: 1
		10.00: 3
	}
*/

function exibirValorSaques() {
	let inValorSaque = document.getElementById("inValorSaque");
	let outNotas100 = document.getElementById("outNotas100");
	let outNotas50 = document.getElementById("outNotas50");
	let outNotas10 = document.getElementById("outNotas10");

	// Limpa mensagens (caso, segunda execução).
	outNotas100.textContent = "";
	outNotas50.textContent = "";
	outNotas10.textContent = "";

	let valorSaque = Number(inValorSaque.value);

	if (valorSaque == 0 || isNaN(valorSaque)) {
		alert("Favor informar um valor válido.");
		inValorSaque.focus();
		return;
	}

	// Verificar se o saque não é múltiplo de dez.
	if (valorSaque % 10 != 0) {
		alert("Valor inválido para notas disponíveis (R$ 100, 50 e 10).")
		inValorSaque.focus();
		return;
	}

	// Calcula notas de 100, 50 e 10.
	const cedula_100 = Math.floor(valorSaque / 100);
	let resto = valorSaque % 100;

	const cedula_50 = Math.floor(resto / 50);
	resto = resto % 50;

	const cedula_10 = Math.floor(resto / 10);

	// Exibir as notas apenas se houver.
	if (cedula_100 > 0) {
		outNotas100.textContent = "Notas de R$100: " + cedula_100;
		outNotas100.style.color = "cyan";
	}

	if (cedula_50 > 0) {
		outNotas50.textContent = "Notas de R$50: " + cedula_50;
		outNotas50.style.color = "cyan";

	}

	if (cedula_10 > 0) {
		outNotas10.textContent = "NOtas de R$10: " + cedula_10;
		outNotas10.style.color = "cyan";
	}

}

const btnExibirNotasSaque = document.getElementById("btnExibirNotasSaque");
btnExibirNotasSaque.addEventListener("click", exibirValorSaques);



/*
	::::::: Anexo :::::::


	# Expressões e operadores
	- Operador: Módulo (%).
	- Descrição: Operador binário. Retorna o inteiro restante da divisão dos dois operandos.
	- Exemplo: 12 % 5 retorna 2.


	:::::::::::::::::::::
*/
