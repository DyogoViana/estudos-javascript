/*
	# Uso de comandos break e continue.

	- O programa realiza a leitura de um número e, caso o número
	for par ele exie o dobro do número e se for ímpar, o triplo.

	  A leitura continua até que o usuário informe 0 (ou algum valor inválido).
*/

alert("Digite 0 (zero) para sair.");

// início da repetição.
do {
	let numero = Number(prompt("Número: "));

	if (numero == 0 || isNaN(numero)) {
		let sairLoop = confirm("Confirmar saída?");

		if (sairLoop) {
			break;
		} else {
			continue;
		}
	}

	// Se par, mostrar o dobro; ímpar, mostrar o triplo.
	if (numero % 2 == 0) {
		alert("O dobro de " + numero + " é " + numero * 2);
	} else {
		alert("O triplo " + numero + " é " + numero * 3);
	}
} while (true); // enquanto verdade. Só sai do laço, pelo break.

alert("bye, bye MTF. =)");



