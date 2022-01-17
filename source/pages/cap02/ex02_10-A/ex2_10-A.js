/*

	# Farmácia.

	- Na cpompra de duas unidades de um mesmo medicamento, o cliente recebe
	como desconto os centavos do valor total.

	- Elaborar um programa que leia a descrição e preço de um medicamento.

	- informe o valor do produto na promoção.

	:::::: valor: 7,30 -- total 14 reais levando dois.

*/

function mostrarPromocao() {
	let inMedicamentos = document.getElementById("inMedicamentos");
	let inPreco = document.getElementById("inPreco");

	let outMedicamento = document.getElementById("outMedicamento");
	let outPromocao = document.getElementById("outPromocao");

	let medicamentos = inMedicamentos.value;
	let precoMedicamento = Number(inPreco.value);

	let promocao = Math.floor(precoMedicamento * 2);

	outMedicamento.textContent = "Promoção de " + medicamentos + ".";
	outPromocao.textContent = "Leve 02 por apenas R$: " + promocao + ".";
}

const btnMostrarPromocao = document.getElementById("btnMostrarPromocao");
btnMostrarPromocao.addEventListener("click", mostrarPromocao);
