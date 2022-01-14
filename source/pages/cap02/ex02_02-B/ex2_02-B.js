/*
	# Revenda de Veículos.

	- Elaborar um programa para uma revenda de veículos.
	- O programa deve ler o modelo e preço do veículo.
	- Apresentar como resposta o valor da entrada (50%) e o saldo em 12x.
*/

function verPromocao() {
	const inVeiculo = document.getElementById("inVeiculo");
	const inPreco = document.getElementById("inPreco");

	const outVeiculo = document.getElementById("outVeiculo");
	const outPreco = document.getElementById("outPreco");

	const veiculo = inVeiculo.value;
	const preco = Number(inPreco.value);

	const promocao = (preco * 0.5);
	const parcelas = promocao / 12;

	outVeiculo.textContent = "Promoção: " + veiculo;
	outResposta.textContent = "Entrada de R$: " + promocao.toFixed(2) + " + 12x  de R$ " + parcelas.toFixed(2);
}

const btnVerPromocao = document.getElementById("btnVerPromocao");
btnVerPromocao.addEventListener("click", verPromocao);
