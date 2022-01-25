/*
	# Condições com Switch...case.

	Informa o valor da taxa de entrega de um medicamento em uma farmácia,
	confome o bairro do cliente.

	A partir dele, fica melhor de destacar os detalhes e as regras de
	sintaxe dessa estrutura condicional.
*/

let bairro = prompt("Bairro de entrega: ");
let taxaEntrega;

switch (bairro) {
	case "Centro":
		taxaEntrega = 5.00;
		break;

	case "Encruzilhada":
	case "Graças":
		taxaEntrega = 7.00;
		break;

	case "Derby":
		taxaEntrega = 10.00;
		break;

	default:
		taxaEntrega = 8.00;
		break;
}

alert("Taxa R$: " + taxaEntrega.toFixed(2));
