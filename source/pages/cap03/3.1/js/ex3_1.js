// Situação do Aluno.

function calcularMedia() {
	let inNomeAluno = document.getElementById("inNomeAluno");
	let inNota01 = document.getElementById("inNota01");
	let inNota02 = document.getElementById("inNota02");

	let outSituacao = document.getElementById("outSituacao");
	let outMedia = document.getElementById("outMedia");

	let nomeAluno = inNomeAluno.value;
	let nota1 = Number(inNota01.value);
	let nota2 = Number(inNota02.value);

	const mediaNota = (nota1 + nota2) / 2;

	outMedia.textContent = "Média das Notas: " + mediaNota.toFixed(1);


	if (mediaNota >= 7) {
		outSituacao.textContent = "Parabéns " + nomeAluno + "! Você foi aprovado(a).";
		outSituacao.style.color = "cyan";
	} else {
		outSituacao.textContent = "Ooops " + nomeAluno + "... Você foi reprovado(a).";
		outSituacao.style.color = "tomato";
	}
}

let btnResultadoMediaNotaAluno = document.getElementById("btnResultadoMediaNotaAluno");

btnResultadoMediaNotaAluno.addEventListener("click", calcularMedia);
