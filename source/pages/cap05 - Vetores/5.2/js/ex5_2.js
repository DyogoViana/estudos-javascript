// Programa: Consultório Odontológico.

let pacientes = [];


// Adicionar Paciente
function adicionarPaciente() {
	let inPaciente = document.getElementById("inPaciente");
	let outAtendimento = document.getElementById("outAtendimento");

	let nomePaciente = inPaciente.value;
	let lista = ""; // String para concatenar pacientes.

	if (nomePaciente == "") {
		alert("Por favor, informe o nome de um paciente");
		inPaciente.focus();
		return;
	}

	pacientes.push(nomePaciente); // Add o nome no final do vetor.

	for (i = 0; i < pacientes.length; i++) {
		lista += (i + 1) + ". " + pacientes[i] + "\n";
	}

	outAtendimento.textContent = lista;

	// Limpa campo e posiciona o cursor em Pacientes.
	inPaciente = "";
	inPaciente.focus();
}

const btnAdicionar = document.getElementById("btnAdicionar");
btnAdicionar.addEventListener("click", adicionarPaciente);



// Adicionar Urgência.
function adicionarUrgencia() {
	let inPaciente = document.getElementById("inPaciente");
	let outAtendimento = document.getElementById("outAtendimento");

	let nomePaciente = inPaciente.value;
	let lista = "";

	if (nomePaciente == "") {
		alert("Por favor, informe o nome de um paciente");
		inPaciente.focus();
		return;
	}

	pacientes.unshift(nomePaciente);

	for (i = 0; i < pacientes.length; i++) {
		lista = lista + (i + 1) + ". " + pacientes[i] + "\n";
	}

	outAtendimento.textContent = lista;
	inPaciente = "";
	inPaciente.focus();
}

const btnUrgencia = document.getElementById("btnUrgencia");
btnUrgencia.addEventListener("click", adicionarUrgencia);



// Atender Paciente.
function atenderPaciente() {
	let outAtendimento = document.getElementById("outAtendimento");
	let outLista = document.getElementById("outLista");

	// Verifica se o vetor pacientes está vazio.
	if (pacientes.length == 0) {
		alert("Não há pacientes na lista de espera.");
		inPaciente.focus();
		return;
	}

	// Remove o paciente do início da fila (e obtem nome).
	let atender = pacientes.shift();
	let lista = "";

	outAtendimento.textContent = atender;

	for (i = 0; i < pacientes.length; i++) {
		lista = lista + (i + 1) + ". " + pacientes[i] + "\n";
	}

	outLista.textContent = lista;
}

const btnAtender = document.getElementById("btnAtender");
btnAtender.addEventListener("click", atenderPaciente);

/*
	# Anexo:

	// Pode ser escrito dessas duas formaas.
		lista = lista + pacientes[i];
		lista += pacientes[i];
*/
