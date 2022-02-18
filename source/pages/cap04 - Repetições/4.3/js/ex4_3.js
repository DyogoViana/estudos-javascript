// Programa para números pares :: Exercício 4.3 :: Repetições

do {
	var numero = Number(prompt("Número: "));
	if (numero == 0 || isNaN(numero)) {
		alert("Digite por favor, um número válido.");
	}
} while (numero == 0 || isNaN(numero));

// Declara e inicializa variável que irá exibir pares.
let paresNumericos = "Pares numéricos entre 1 e " + numero + ": ";

// isola  a primeiro par (para evitar a última vírgula).
if (numero > 1) {
	paresNumericos = paresNumericos + "2";
}

// Laço para acumular pares.
for (let i = 4; i <= numero; i = i + 2) {
	paresNumericos = paresNumericos + ", " + i;
}

alert(paresNumericos);
