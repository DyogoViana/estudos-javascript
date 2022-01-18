/*
	# Supermercado.

	## Um supermercado está com uma promoção. Para aumentar suas vendas no setor
	de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando 50%
	de desconto (para um item) na compra de três unidades do produto.

	- Elaborar um programa que leia a descrição e preço de um produto.
	- Após, apresente uma mensagem indicando a promoção.

	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	:::::::::: Preço: R$4.00;  3 por R$10.00;   terceiro item: R$2.00 ::::::::::
*/


function mostrarPromocao() {
	const inProduto = document.getElementById("inProduto");
	const inPreco = document.getElementById("inPreco");
	const outResultadoPromocao = document.getElementById("outResultadoPromocao");
	const outValorTerceiroItem = document.getElementById("outValorTerceiroItem");

	const produto = inProduto.value;
	const preco = Number(inPreco.value);

	const promocaoTresItens = (preco * 2) + (preco / 2);
	const itemPromocao = preco / 2;

	outResultadoPromocao.textContent = produto + " - Promoção: Leve 3 por apenas R$: " + promocaoTresItens.toFixed(2);
	outValorTerceiroItem.textContent = "O terceiro produto custa apenas R$: " + itemPromocao.toFixed(2);
}

// botão.
const btnVerPromocao = document.getElementById("btnVerPromocao");
btnVerPromocao.addEventListener("click", mostrarPromocao);
