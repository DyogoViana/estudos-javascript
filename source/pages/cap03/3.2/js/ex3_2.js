function calcularPeso() {
	let inNome = document.getElementById("inNome");
	let rbMasculino = document.getElementById("rbMasculino");
	let rbFeminino = document.getElementById("rbFeminino");
	let inAltura = document.getElementById("inAltura");

	let outResposta = document.getElementById("outResposta");

	const nome = inNome.ariaValueMax;
	const masculino = rbMasculino.checked;
	const feminino = rbFeminino.checked;
	const altura = Number(inAltura.value);

	// Verificar se 'nome' foi preenchido e sexo selecionado.
	if (nome == "" || (masculino == false && feminino == false)) {
		alert("Por favor, informe o nome e selecione o sexo...");
		inNome.focus();
		return;
	}

	// Se 'altura' vaxio (0) ou NaN.
	if (altura == 0 || isNaN(altura)) {
		alert("Por favor, informe a altura corretamente...");
		inAltura.focus();
		return;
	}

	// Se 'masculino' == true.
	if (masculino) {
		let peso = 22 * Math.pow(altura, 2); // Math.pow, eleva ao quadrado.
	} else {
		let peso = 21 * Math.pow(altura, 2);
	}

	outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + "kg.";
}

const btnCalcularPesoIdeal = document.getElementById("btnCalcularPesoIdeal");
btnCalcularPesoIdeal.addEventListener("click", calcularPeso);
