// Programa Contas do Mês



// declara e inicialiuza contadores e acumuladores.
let numeroContas = 0;
let valorTotal = 0;

// Variável string que acumula as contas.
let resposta = "";

function registraContas() {
	let inDescricao = document.getElementById("inDescricao");
	let inValor = document.getElementById("inValor");
	let outListaContas = document.getElementById("outListaContas");
	let outTotal = document.getElementById("outTotal");

	let descricao = inDescricao.value;
	let valor = Number(inValor.value);

	if (descricao == "" || valor == 0 || isNaN(valor)) {
		alert("Por favor, informe os dados corretamente.");
		inDescricao.focus()
		return
	}

	// Adiciona valores ao contador e acumulador.
	numeroContas++;
	valorTotal = valorTotal + valor;

	resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";

	outListaContas.textContent = resposta + "............................................";
	outTotal.textContent = numeroContas + " Contas(s) - Total R$: " + valorTotal.toFixed(2);

	// Limpa campos e posiciona cursor em inDescicao.
	inDescricao.value = "";
	inValor.value = "";
	inDescricao.focus();
}

const btnRegistrarConta = document.getElementById("btnRegistrarConta");
btnRegistrarConta.addEventListener("click", registraContas);
